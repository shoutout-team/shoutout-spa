<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" xl="10">
          <h1 class="impressum__headline">Datenschutz</h1>
          <text-block v-for="(block, key) in contact" :key="key" :content="block" />
        </v-col>
      </v-row>
    </v-container>
    <div class="wrapper pb-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" xl="10">
            <text-block v-for="(block, key) in moreInfos" :key="key" :content="block" />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" xl="10">
            <a target="_blank" href="https://datenschutz-generator.de/?l=de" class="font-weight-bold">
              Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
            </a>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import TextBlock from '@/components/textBlock.vue'

export default {
  components: {
    TextBlock
  },
  data () {
    return {
      contact: [
        {
          headline: 'Datenschutzerklärung',
          text: 'Shoutout ist eine Initiative die im Rahmen des Hackathons #WirvsVirus von der Bundesregierung entstanden ist. Diese Plattform wurde ins Leben gerufen, um Menschen in einer Krisensituation zu helfen. Wir wollen keinen eigenen Vorteil aus ihr schöpfen oder uns bereichern. Deshalb möchten wir Shoutout so transparent wie möglich gestalten. Um Unsicherheiten und Misstrauen entgegenzuwirken, möchten wir an dieser Stelle gerne offenlegen, welche Informationen während deines Besuchs auf unserer Seite erfasst werden und wozu wir diese Informationen nutzen. Falls du Fragen oder Bedenken hast, findest du an dieser Stelle auch nochmal unsere Kontaktinformationen. '
        },
        {
          headline: 'Information über die Verarbeitung Ihrer Daten gemäß Art. 13 Datenschutzgrundverordnung (DS-GVO)',
          text: 'Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten“ bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot“). Die verwendeten Begriffe sind nicht geschlechtsspezifisch. Stand: 28. März 2020'
        }
      ],
      moreInfos: [
        {
          headline: 'Verantwortlicher und Datenschutzbeauftragter',
          text: 'Verantwortlich für diese Website ist<br>shoutout.jetzt GbR<br>Dominik Criado<br>Rankestraße 10<br>50935 Köln<br>Deutschland<br>Telefon: 0049 1703190894'
        },
        {
          text: '<span class="font-weight-bold">Vertretungsberechtigte Personen:</span> Dominik Criado (Konzept), Tabea Sabolowitsch (Text), Jessica Willius (Design & Social Media), Olga Liamina (Design), Johannes Zimmer (Design), Lena Overkamp (Design), Leo Reuter (Frontend), Michael Ajwani (Backend), Henry Steinhauer (Frontend), Maria Friedländer (Projektmanagement)'
        },
        {
          text: '<span class="font-weight-bold">E-Mail-Adresse:</span> hallo@shoutout.jetzt<br><span class="font-weight-bold">Impressum</span><a href="www.shoutout.jetzt/impressum">www.shoutout.jetzt/</a>impressum'
        },
        {
          headline: 'Übersicht der Verarbeitungen',
          text: 'Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.'
        },
        {
          text: 'Welche personenbezogenen Daten werden für welchen Zweck erhoben und verarbeitet?'
        },
        {
          headline: 'A. Viertelfreunde/potentielle Spender',
          text: 'Diejenigen, die Läden in dem gewünschten Viertel suchen, können per Postleitzahl ihren Standort eingeben und finden die Läden in ihrer Nähe. Eine separate Speicherung und Verarbeitung dieser Daten erfolgt nicht.'
        },
        {
          headline: 'B. Viertelhelden/Ladenbetreiber',
          text: 'Diejenigen, die als Inhaber eines Ladens ihr Profil auf die Website einstellen möchten, müssen zur Umsetzung der Benennung des Ladens auf dieser Plattform die Pflichtangaben zu dem Laden hinterlegen. Diese sind Vorname, Name, E-Mailadresse, Unternehmensname, Handelsregisternummer, Adresse des Ladens, Geschäfts-Kategorie des Ladens. Rechtsgrundlage für die Speicherung der Pflichtangaben ist Art. 6 Abs. 1b DS-GVO.'
        },
        {
          headline: '3. Website Besucher',
          text: 'Ihre Daten werden zum einen verarbeitet, wenn Sie uns diese mitteilen (Kontaktformular). Andere Daten werden automatisch bei Besuch der Website durch unsere IT-System erfasst. Das sind im Wesentlichen technische Daten (wie Internetbrowser, Datum und Uhrzeit des Website-Aufrufes und Betriebssystem.) Die Erfassung dieser Daten erfolgt automatisch mit Betreten der Website.'
        },
        {
          headline: '4. Arten der verarbeiteten Daten',
          text: `<ul>
          <li>Datum und Uhrzeit des Abrufes</li>
          <li>IP-Adresse des aufrufenden Rechners</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Betriebssystem</li>
          <li>Browsertyp und verwendete Version</li>
          <li>Bestandsdaten (z.B. Namen, Adressen).</li>
          <li>Inhaltsdaten (z.B. Texteingaben, selbst hochgeladene Fotografien, Videos)</li>
          <li>Kontaktdaten (z.B. E-Mail, Telefonnummern)</li>
          <li>Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).</li>
          <li>Übertragende Datenmenge</li>
          <li>Standortdaten (Daten, die den Standort des Endgeräts eines Endnutzers angeben).</li>
          </ul>`
        },
        {
          headline: '5. Zwecke der Verarbeitung',
          text: 'Die Daten werden teilweise erhoben, um eine fehlerfreie Bereitstellung der Website zu gewähren; andere Daten werden zur Analyse der Nutzerverhaltens verwendet, um die Website bedarfsgerechter optimieren zu können. Eine eigenständige Weiterleitung der Daten an Dritte erfolgt nicht.'
        },
        {
          headline: '4. Arten der verarbeiteten Daten',
          text: `Die Daten werden teilweise erhoben, um eine fehlerfreie Bereitstellung der Website zu gewähren; andere Daten werden zur Analyse der Nutzerverhaltens verwendet, um die Website bedarfsgerechter optimieren zu können. Eine eigenständige Weiterleitung der Daten an Dritte erfolgt nicht.
          <ul>
          <li>Affiliate-Nachverfolgung.</li>
          <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
          <li>Besuchsaktionsauswertung.</li>
          <li>Büro- und Organisationsverfahren.</li>
          <li>Content Delivery Network (CDN).</li>
          <li>Cross-Device Tracking (geräteübergreifende Verarbeitung von Nutzerdaten für Marketingzwecke).</li>
          <li>Direktmarketing (z.B. per E-Mail oder postalisch).</li>
          <li>Feedback (z.B. Sammeln von Feedback via Online-Formular).</li>
          <li>Interessenbasiertes und verhaltensbezogenes Marketing.</li>
          <li>Kontaktanfragen und Kommunikation.</li>
          <li>Profiling (Erstellen von Nutzerprofilen).</li>
          <li>Remarketing.</li>
          <li>Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher).</li>
          <li>Sicherheitsmaßnahmen.</li>
          <li>Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies).</li>
          <li>Servermonitoring und Fehlererkennung.</li>
          <li>Vertragliche Leistungen und Service.</li>
          <li>Verwaltung und Beantwortung von Anfragen.</li>
          <li>Zielgruppenbildung (Bestimmung von für Marketingzwecke relevanten Zielgruppen oder sonstige Ausgabe von Inhalten).</li>
          </ul>`
        },
        {
          headline: '6. Sicherheitsmaßnahmen',
          text: 'Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.<br>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.<br>Kürzung der IP-Adresse: Sofern es uns möglich ist oder eine Speicherung der IP-Adresse nicht erforderlich ist, kürzen wir oder lassen Ihre IP-Adresse kürzen. Im Fall der Kürzung der IP-Adresse, auch als "IP-Masking" bezeichnet, wird das letzte Oktett, d.h., die letzten beiden Zahlen einer IP-Adresse, gelöscht (die IP-Adresse ist in diesem Kontext eine einem Internetanschluss durch den Online-Zugangs-Provider individuell zugeordnete Kennung). Mit der Kürzung der IP-Adresse soll die Identifizierung einer Person anhand ihrer IP-Adresse verhindert oder wesentlich erschwert werden.<br><span class="font-weight-bold">SSL-Verschlüsselung (https):</span> Um Ihre via unser Online-Angebot übermittelten Daten zu schützen, nutzen wir eine SSL-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen an dem Präfix https:// in der Adresszeile Ihres Browsers.'
        },
        {
          headline: '7. Zahlungsdienstleister',
          text: 'Im Rahmen der Möglichkeit Spenden zu leisten bzw. diese entgegen zu nehmen, verweisen wir auf Paypal und GoFundMe und geben geben die Möglichkeit zu Überweisung über das eigene Kreditinstitut (zusammenfassend "Zahlungsdienstleister"). Zu den durch die Zahlungsdienstleister verarbeiteten Daten gehören Bestandsdaten, wie z.B. der Name und die Adresse, Bankdaten, wie z.B. Kontonummern oder Kreditkartennummern, Passwörter, TANs und Prüfsummen sowie die Vertrags-, Summen- und empfängerbezogenen Angaben. Die Angaben sind erforderlich, um die Transaktionen durchzuführen. Die eingegebenen Daten werden jedoch nur durch die Zahlungsdienstleister verarbeitet und bei diesen gespeichert. D.h., wir erhalten keine konto- oder kreditkartenbezogenen Informationen, sondern lediglich Informationen mit Bestätigung oder Negativbeauskunftung der Zahlung. Unter Umständen werden die Daten seitens der Zahlungsdienstleister an Wirtschaftsauskunfteien übermittelt. Diese Übermittlung bezweckt die Identitäts- und Bonitätsprüfung. Hierzu verweisen wir auf die AGB und die Datenschutzhinweise der Zahlungsdienstleister. Für die Zahlungsgeschäfte gelten die Geschäftsbedingungen und die Datenschutzhinweise der jeweiligen Zahlungsdienstleister, welche innerhalb der jeweiligen Webseiten bzw. Transaktionsapplikationen abrufbar sind. Wir verweisen auf diese ebenfalls zwecks weiterer Informationen und Geltendmachung von Widerrufs-, Auskunfts- und anderen Betroffenenrechten.'
        },
        {
          headline: 'Eingesetzte Dienste und Diensteanbieter:',
          text: `<ul>
          <li><span class="font-weight-bold">PayPal:</span> Zahlungsdienstleistungen und -Lösungen (z.B. PayPal, PayPal Plus, Braintree); Dienstanbieter: PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg; Website: https://www.paypal.com/de; Datenschutzerklärung: https://www.paypal.com/de/webapps/mpp/ua/privacy-full.</li>
          <li><span class="font-weight-bold">Gofundme:</span> https://www.gofundme.com / Datenschutzerklärung: https://www.gofundme.com/privacy / Legal Department: 855 Jefferson Avenue, P.O. Box 1329, Redwood City, CA 94063</li>
          </ul>`
        },
        {
          headline: '8. Registrierung, Anmeldung und Nutzerkonto',
          text: 'Nutzer (Unternehmen) können ein Nutzerkonto anlegen. Im Rahmen der Registrierung werden den Nutzern die erforderlichen Pflichtangaben mitgeteilt und zu Zwecken der Bereitstellung des Nutzerkontos auf Grundlage vertraglicher Pflichterfüllung verarbeitet. Zu den verarbeiteten Daten gehören insbesondere die Login-Informationen (Name, Passwort sowie eine E-Mail-Adresse). Die im Rahmen der Registrierung eingegebenen Daten werden für die Zwecke der Nutzung des Nutzerkontos und dessen Zwecks verwendet.'
        },
        {
          text: 'Die Nutzer können über Vorgänge, die für deren Nutzerkonto relevant sind, wie z.B. technische Änderungen, per E-Mail informiert werden. Wenn Nutzer ihr Nutzerkonto gekündigt haben, werden deren Daten im Hinblick auf das Nutzerkonto, vorbehaltlich einer gesetzlichen Aufbewahrungspflicht, gelöscht. Es obliegt den Nutzern, ihre Daten bei erfolgter Kündigung vor dem Vertragsende zu sichern. Wir sind berechtigt, sämtliche während der Vertragsdauer gespeicherte Daten des Nutzers unwiederbringlich zu löschen.'
        },
        {
          text: 'Im Rahmen der Inanspruchnahme unserer Registrierungs- und Anmeldefunktionen sowie der Nutzung des Nutzerkontos speichern wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung. Die Speicherung erfolgt auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 f DS-GVO als auch jener der Nutzer an einem Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, es sei denn, sie ist zur Verfolgung unserer Ansprüche erforderlich oder es besteht hierzu besteht eine gesetzliche Verpflichtung.'
        },
        {
          text: '<span class="font-weight-bold">Online-Forum:</span> Die Teilnahme am Forum setzt eine Registrierung voraus, bei der, vorbehaltlich anderer Angaben im Registrierungsformular, ein oder Ihr Name, ein Kennwort und die E-Mail-Adresse, an welche die Zugangsdaten versendet werden, angegeben werden müssen. Aus Gründen der Sicherheit sollte das Kennwort dem Stand der Technik entsprechen, also kompliziert sein (hierauf werden Nutzer notfalls im Rahmen der Registrierung hingewiesen) und nicht an anderer Stelle verwendet werden. Die Beiträge im Forum sind für die Öffentlichkeit sichtbar, es sei denn, deren Sichtbarkeit ist auf bestimmte Mitglieder oder Mitgliedergruppen beschränkt. Die Beiträge der Verfasser werden mit deren Namen, sofern registriert oder angegeben, dem Zeitpunkt und dem Eintragsinhalt gespeichert. Bei Anmeldungen und beim Verfassen von Einträgen werden ferner die IP-Adressen der Nutzer gespeichert, falls die Einträge einen unzulässigen Inhalt aufweisen sollten und die IP-Adressen der Rechtsverfolgung dienen könnten. Der Verantwortliche behält sich vor, die Anmeldungen und Einträge auf Grundlage einer sachgerechten Abwägung zu löschen.'
        },
        {
          headline: '9. Blogs und Publikationsmedien',
          text: `Wir nutzen Blogs oder vergleichbare Mittel der Onlinekommunikation und Publikation (nachfolgend "Publikationsmedium"). Die Daten der Leser werden für die Zwecke des Publikationsmediums nur insoweit verarbeitet, als es für dessen Darstellung und die Kommunikation zwischen Autoren und Lesern oder aus Gründen der Sicherheit erforderlich ist. Im Übrigen verweisen wir auf die Informationen zur Verarbeitung der Besucher unseres Publikationsmediums im Rahmen dieser Datenschutzhinweise.<br><span class="font-weight-bold">Kommentare und Beiträge:</span> Wenn Nutzer Kommentare oder sonstige Beiträge hinterlassen, können ihre IP-Adressen auf Grundlage unserer berechtigten Interessen gespeichert werden. Das erfolgt zu unserer Sicherheit, falls jemand in Kommentaren und Beiträgen widerrechtliche Inhalte hinterlässt (Beleidigungen, verbotene politische Propaganda etc.). In diesem Fall können wir selbst für den Kommentar oder Beitrag belangt werden und sind daher an der Identität des Verfassers interessiert.<br>Des Weiteren behalten wir uns vor, auf Grundlage unserer berechtigten Interessen die Angaben der Nutzer zwecks Spamerkennung zu verarbeiten.<br>Auf derselben Rechtsgrundlage behalten wir uns vor, im Fall von Umfragen die IP-Adressen der Nutzer für deren Dauer zu speichern und Cookies zu verwenden, um Mehrfachabstimmungen zu vermeiden.<br>Die im Rahmen der Kommentare und Beiträge mitgeteilten Informationen zur Person, etwaige Kontakt- sowie Webseiteninformationen als auch die inhaltlichen Angaben werden von uns bis zum Widerspruch der Nutzer dauerhaft gespeichert.<br>
          <ul>
          <li><span class="font-weight-bold">Verarbeitete Datenarten:</span> Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail, Telefonnummern), Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos), Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
          <li><span class="font-weight-bold">Betroffene Personen:</span> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
          <li><span class="font-weight-bold">Zwecke der Verarbeitung:</span> Vertragliche Leistungen und Service, Feedback (z.B. Sammeln von Feedback via Online-Formular), Sicherheitsmaßnahmen, Verwaltung und Beantwortung von Anfragen.</li>
          <li><span class="font-weight-bold">Rechtsgrundlagen:</span> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO), Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO), Schutz lebenswichtiger Interessen (Art. 6 Abs. 1 S. 1 lit. d. DSGVO).</li>
          </ul>`
        },
        {
          headline: '10. Kontaktaufnahme',
          text: `Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via soziale Medien) werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.<br>Die Beantwortung der Kontaktanfragen im Rahmen von vertraglichen oder vorvertraglichen Beziehungen erfolgt zur Erfüllung unserer vertraglichen Pflichten im Sinne des Art. 6 Absatz 1 b DS-GVO oder zur Beantwortung von (vor)vertraglichen Anfragen und im Übrigen auf Grundlage der berechtigten Interessen an der Beantwortung der Anfragen.<br>
          <ul>
          <li><span class="font-weight-bold">Verarbeitete Datenarten:</span> Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail, Telefonnummern), Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos).</li>
          <li><span class="font-weight-bold">Betroffene Personen:</span> Kommunikationspartner.</li>
          <li><span class="font-weight-bold">Zwecke der Verarbeitung:</span> Kontaktanfragen und Kommunikation.</li>
          <li><span class="font-weight-bold">Rechtsgrundlagen:</span> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
          </ul>`
        },
        {
          headline: '11. Bereitstellung des Onlineangebotes und Webhosting',
          text: `Um unser Onlineangebot sicher und effizient bereitstellen zu können, nehmen wir die Leistungen von einem oder mehreren Webhosting-Anbietern in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern) das Onlineangebot abgerufen werden kann. Zu diesen Zwecken können wir Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste sowie Sicherheitsleistungen und technische Wartungsleistungen in Anspruch nehmen.
          Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten Daten können alle die Nutzer unseres Onlineangebotes betreffenden Angaben gehören, die im Rahmen der Nutzung und der Kommunikation anfallen. Hierzu gehören regelmäßig die IP-Adresse, die notwendig ist, um die Inhalte von Onlineangeboten an Browser ausliefern zu können, und alle innerhalb unseres Onlineangebotes oder von Webseiten getätigten Eingaben.
          E-Mail-Versand und -Hosting: Die von uns in Anspruch genommenen Webhosting-Leistungen umfassen ebenfalls den Versand, den Empfang sowie die Speicherung von E-Mails. Zu diesen Zwecken werden die Adressen der Empfänger sowie Absender als auch weitere Informationen betreffend den E-Mailversand (z.B. die beteiligten Provider) sowie die Inhalte der jeweiligen E-Mails verarbeitet. Die vorgenannten Daten können ferner zu Zwecken der Erkennung von SPAM verarbeitet werden. Wir bitten darum, zu beachten, dass E-Mails im Internet grundsätzlich nicht verschlüsselt versendet werden. Im Regelfall werden E-Mails zwar auf dem Transportweg verschlüsselt, aber (sofern kein sogenanntes Ende-zu-Ende-Verschlüsselungsverfahren eingesetzt wird) nicht auf den Servern, von denen sie abgesendet und empfangen werden. Wir können daher für den Übertragungsweg der E-Mails zwischen dem Absender und dem Empfang auf unserem Server keine Verantwortung übernehmen.
          Erhebung von Zugriffsdaten und Logfiles: Wir selbst (bzw. unser Webhostinganbieter) erheben Daten zu jedem Zugriff auf den Server (sogenannte Serverlogfiles). Zu den Serverlogfiles können die Adresse und Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider gehören.
          Die Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt werden, z.B., um eine Überlastung der Server zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken) und zum anderen, um die Auslastung der Server und ihre Stabilität sicherzustellen.
          Content-Delivery-Network: Wir setzen ein "Content-Delivery-Network" (CDN) ein. Ein CDN ist ein Dienst, mit dessen Hilfe Inhalte eines Onlineangebotes, insbesondere große Mediendateien, wie Grafiken oder Programm-Skripte, mit Hilfe regional verteilter und über das Internet verbundener Server schneller und sicherer ausgeliefert werden können.<br>
          <span class="">Cloudflare:</span> 101 Townsend St, San Francisco, CA 94107 / Datenschutzangaben:<br>
          <a href="https://www.cloudflare.com/de-de/privacypolicy/" target="_blank">https://www.cloudflare.com/de-de/privacypolicy/</a>
          <span class="">Sentry:</span> Datenschutzangaben: <a target="_blank" href="https://sentry.io/privacy/">https://sentry.io/privacy/</a>
          <ul>
          <li><span class="font-weight-bold">Verarbeitete Datenarten:</span> Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos), Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
          <li><span class="font-weight-bold">Betroffene Personen:</span> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten), Kunden.</li>
          <li><span class="font-weight-bold">Zwecke der Verarbeitung:</span> Content Delivery Network (CDN), Servermonitoring und Fehlererkennung, Vertragliche Leistungen und Service, Sicherheitsmaßnahmen.</li>
          <li><span class="font-weight-bold">Rechtsgrundlagen:</span> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO), Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO).</li>
          </ul>`
        },
        {
          headline: 'Eingesetzte Dienste und Diensteanbieter:',
          text: `
          <ul>
          <li>
          <span class="font-weight-bold"Amazon Web Services (AWS):</span> Webhosting und infrastrukturelle Dienstleistungen; Dienstanbieter: Amazon Web Services, Inc., 410 Terry Avenue North, Seattle WA 98109, USA; Website: <a target="_blank" href="https://aws.amazon.com/de/">https://aws.amazon.com/de/</a>; Datenschutzerklärung: <a target="_blank" href="https://aws.amazon.com/de/privacy/?nc1=f_pr">https://aws.amazon.com/de/privacy/?nc1=f_pr</a>; Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA): <a target="_blank" href="https://www.privacyshield.gov/participant?id=a2zt0000000TOWQAA4&status=Active">https://www.privacyshield.gov/participant?id=a2zt0000000TOWQAA4&status=Active</a>.</li>
          <li>3057421516.1298075 577878355.0392157 5986765652.905797 900086041.8506329 868675774.9248619 2369342004.811966 927472051.3178694 1684152895.3023255 1083276230.1670282 889486768.0584518 1127493700.5740528 850337870.659118 895245129.995671 8680427005.509615 573150196.2909567 103015527054.11111 498227445.2680965 157144152.40191388 1647800186.3734694 298757898.0371156</li>
          <li><span class="font-weight-bold">New Relic:</span> Servermonitoring und Fehlererkennung; Dienstanbieter: New Relic, Inc. Attn: Legal Department 188 Spear Street, Suite 1200 San Francisco, CA 94105, USA; Website: https://newrelic.com; Sicherheitsmaßnahmen: IP-Masking (Pseudonymisierung der IP-Adresse); Datenschutzerklärung: https://newrelic.com/termsandconditions/privacy; Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA): https://www.privacyshield.gov/participant?id=a2zt0000000TNPiAAO&status=Active; Löschung von Daten: Die aggregierten Daten werden nach drei Monaten gelöscht, die pseudonymisierten Daten nach sieben Tagen..</li>
          <li>485582684.53907496 2151888951.3459597 4352586255.888889 848880723.7585471 899473549.4150361 2215695245.4487534 1019018262.8262032 268154338.84348738 2699631041.5384617 268177527.26204818 971054389.6363636 956471121.0887574 1253412588.0660622 489292655.69320595 1288985127.7007723 197821383.2832551 610356745.0456674 1293770247.8980715 71812607.67741935 335228420.17021275</li>
          </ul>`
        },
        {
          headline: 'Präsenzen in sozialen Netzwerken',
          text: `Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen Daten der Nutzer, um mit den dort aktiven Nutzern zu kommunizieren oder um Informationen über uns anzubieten.<br>Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der Europäischen Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer erschwert werden könnte. Im Hinblick auf US-Anbieter, die unter dem Privacy-Shield zertifiziert sind oder vergleichbare Garantien eines sicheren Datenschutzniveaus bieten, weisen wir darauf hin, dass sie sich damit verpflichten, die Datenschutzstandards der EU einzuhalten.<br>Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So können z.B. anhand des Nutzungsverhaltens und sich daraus ergebender Interessen der Nutzer Nutzungsprofile erstellt werden. Die Nutzungsprofile können wiederum verwendet werden, um z.B. Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern verwendeten Geräte gespeichert werden (insbesondere, wenn die Nutzer Mitglieder der jeweiligen Plattformen sind und bei diesen eingeloggt sind).<br>Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der Widerspruchsmöglichkeiten (Opt-Out) verweisen wir auf die Datenschutzerklärungen und Angaben der Betreiber der jeweiligen Netzwerke.<br>Auch im Fall von Auskunftsanfragen und der Geltendmachung von Betroffenenrechten weisen wir darauf hin, dass diese am effektivsten bei den Anbietern geltend gemacht werden können. Nur die Anbieter haben jeweils Zugriff auf die Daten der Nutzer und können direkt entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe benötigen, dann können Sie sich an uns wenden.
          <ul>
          <li><span class="font-weight-bold">Verarbeitete Datenarten:</span> Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail, Telefonnummern), Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos), Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
          <li><span class="font-weight-bold">Betroffene Personen:</span> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
          <li><span class="font-weight-bold">Zwecke der Verarbeitung:</span> Kontaktanfragen und Kommunikation, Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies), Remarketing, Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher).</li>
          <li><span class="font-weight-bold">Rechtsgrundlagen:</span> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
          </ul>
          `
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  background-color: #eeede8;
}

.impressum {
  &__headline {
    font-family: 'theRambler';
    font-size: 120px;
  }
}
</style>
