import Image from 'next/image';

interface AuthorBioProps {
  showFull?: boolean;
}

export default function AuthorBio({ showFull = true }: AuthorBioProps) {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 my-8 border-l-4 border-[--primary-gold]">
      <div className="flex items-start gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-3 ring-[--primary-gold]/20">
          <Image
            src="/images/mustafa-ali.jpg"
            alt="Mustafa Ali - UmrahCheck Gründer"
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-lg text-gray-900 mb-1">Mustafa Ali</h4>
          <p className="text-[--primary-gold] font-medium text-sm mb-2">
            Gründer & CEO von UmrahCheck.de
          </p>
          {showFull && (
            <>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Als praktizierender Muslim und Tech-Entrepreneur erkannte ich die Probleme 
                im Umrah-Markt: Intransparente Preise, versteckte Aufschläge und schlechte Beratung. 
                Mit UmrahCheck bringe ich KI-gestützte Transparenz in die Umrah-Planung.
              </p>
              <p className="text-gray-600 text-xs">
                💡 <strong>Mission:</strong> Ehrliche, transparente Umrah-Reisen für alle Muslime zugänglich machen
                <br />
                🎯 <strong>Expertise:</strong> 5+ Jahre Reisebranche, 50+ Umrah-Angebote analysiert
              </p>
            </>
          )}
        </div>
      </div>
      
      {showFull && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-4 text-sm">
            <a 
              href="https://umrahcheck.de" 
              className="text-[--primary-gold] hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 UmrahCheck.de besuchen
            </a>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">
              📧 Kontakt: hallo@umrahcheck.de
            </span>
          </div>
        </div>
      )}
    </div>
  );
}