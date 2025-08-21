-- UmrahCheck SaaS Database Schema Extension
-- Add these tables to your existing Supabase project
-- (Skip users table if you already have leads/users table)

-- 1. Check if users table exists, if not create it
-- If you have a 'leads' table, you can use that as users reference
DO $$ 
BEGIN 
  IF NOT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'users') THEN
    CREATE TABLE users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email VARCHAR UNIQUE NOT NULL,
      name VARCHAR,
      whatsapp VARCHAR,
      created_at TIMESTAMP DEFAULT NOW()
    );
  END IF;
END $$;

-- 2. KI analyses tracking (connects to your existing user system)
CREATE TABLE ki_analyses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID, -- Will reference users(id) or leads(id) depending on your setup
  lead_email VARCHAR, -- Fallback if no user_id, connects to your existing leads
  budget DECIMAL NOT NULL,
  departure_city VARCHAR,
  travel_dates JSONB,
  recommendation JSONB,
  status VARCHAR DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- 3. Subscription management for SaaS revenue
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  plan_type VARCHAR NOT NULL CHECK (plan_type IN ('basic', 'premium', 'enterprise')),
  status VARCHAR DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired')),
  price_paid DECIMAL NOT NULL,
  valid_until TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 4. Hotel database for price intelligence
CREATE TABLE hotels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR NOT NULL,
  city VARCHAR NOT NULL CHECK (city IN ('mecca', 'medina')),
  distance_to_haram INTEGER, -- in meters
  rating DECIMAL CHECK (rating >= 0 AND rating <= 5),
  price_per_night DECIMAL,
  features JSONB,
  booking_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 5. Price history for market intelligence
CREATE TABLE price_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  hotel_id UUID REFERENCES hotels(id),
  date DATE NOT NULL,
  price DECIMAL NOT NULL,
  availability BOOLEAN DEFAULT true,
  source VARCHAR,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 6. User behavior tracking for analytics
CREATE TABLE user_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  page_visited VARCHAR,
  time_spent INTEGER, -- in seconds
  conversion_action VARCHAR,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 7. PDF purchases tracking (for Copecart integration)
CREATE TABLE pdf_purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  copecart_transaction_id VARCHAR UNIQUE,
  price_paid DECIMAL NOT NULL,
  pdf_type VARCHAR DEFAULT 'umrah_package',
  download_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_ki_analyses_user_id ON ki_analyses(user_id);
CREATE INDEX idx_ki_analyses_created_at ON ki_analyses(created_at);
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_price_history_hotel_date ON price_history(hotel_id, date);
CREATE INDEX idx_user_sessions_user_id ON user_sessions(user_id);

-- Row Level Security (RLS) - basic setup
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE ki_analyses ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Sample data for testing
INSERT INTO hotels (name, city, distance_to_haram, rating, price_per_night, features, booking_url) VALUES
('Fairmont Makkah Clock Royal Tower', 'mecca', 50, 4.8, 450.00, '{"wifi": true, "breakfast": true, "view": "kaaba", "luxury": true}', 'https://booking.com/hotel/fairmont-makkah'),
('Swissotel Al Maqam Makkah', 'mecca', 100, 4.7, 380.00, '{"wifi": true, "breakfast": true, "pool": true}', 'https://booking.com/hotel/swissotel-makkah'),
('Hilton Suites Makkah', 'mecca', 200, 4.5, 280.00, '{"wifi": true, "kitchenette": true}', 'https://booking.com/hotel/hilton-makkah'),
('Anwar Al Madinah Movenpick Hotel', 'medina', 150, 4.6, 220.00, '{"wifi": true, "breakfast": true, "traditional": true}', 'https://booking.com/hotel/movenpick-medina'),
('Taiba Front Hotel', 'medina', 300, 4.2, 120.00, '{"wifi": true, "budget": true}', 'https://booking.com/hotel/taiba-medina');

-- Sample price history
INSERT INTO price_history (hotel_id, date, price, availability, source) 
SELECT 
  h.id, 
  CURRENT_DATE - (random() * 30)::integer, 
  h.price_per_night * (0.8 + random() * 0.4), 
  random() > 0.1,
  'booking.com'
FROM hotels h;

COMMENT ON TABLE users IS 'Customer database for UmrahCheck SaaS';
COMMENT ON TABLE ki_analyses IS 'AI analysis results and user requests';
COMMENT ON TABLE subscriptions IS 'SaaS subscription management';
COMMENT ON TABLE hotels IS 'Hotel database for price intelligence';
COMMENT ON TABLE price_history IS 'Historical price data for market analysis';
COMMENT ON TABLE user_sessions IS 'User behavior tracking for analytics';
COMMENT ON TABLE pdf_purchases IS 'PDF purchase tracking via Copecart';