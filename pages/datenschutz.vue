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
          text: 'Shoutout ist eine Initiative die im Rahmen des Hackathons #WirVsVirus von der Bundesregierung entstanden ist. Diese Plattform wurde ins Leben gerufen, um Menschen in einer Krisensituation zu helfen. Wir wollen keinen eigenen Vorteil aus ihr schöpfen oder uns bereichern. Deshalb möchten wir Shoutout so transparent wie möglich gestalten. Um Unsicherheiten und Misstrauen entgegenzuwirken, möchten wir an dieser Stelle gerne offenlegen, welche Informationen während deines Besuchs auf unserer Seite erfasst werden und wozu wir diese Informationen nutzen. Falls du Fragen oder Bedenken hast, findest du an dieser Stelle auch nochmal unsere Kontaktinformationen. '
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
          text: '<span class="font-weight-bold">E-Mail-Adresse:</span> hallo@shoutout.jetzt<br><span class="font-weight-bold">Impressum: </span><a target="_blank" href="https://www.shoutout.jetzt/impressum">www.shoutout.jetzt/impressum</a>'
        },
        {
          headline: 'Übersicht der Verarbeitungen',
          text: 'Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.'
        },
        {
          text: 'Welche personenbezogenen Daten werden für welchen Zweck erhoben und verarbeitet?'
        },
        {
          headline: 'A. Viertelfreunde / potentielle Spender',
          text: 'Diejenigen, die Läden in dem gewünschten Viertel suchen, können per Postleitzahl ihren Standort eingeben und finden die Läden in ihrer Nähe. Eine separate Speicherung und Verarbeitung dieser Daten erfolgt nicht.'
        },
        {
          headline: 'B. Viertelhelden / Ladenbetreiber',
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
        },
        {
          headline: 'Eingesetzte Dienste und Dienstanbieter:',
          text: `<ul>
          <li><span class="font-weight-bold">Google Fonts:</span> Wir binden die Schriftarten ("Google Fonts") des Anbieters Google ein, wobei die Daten der Nutzer allein zu Zwecken der Darstellung der Schriftarten im Browser der Nutzer verwendet werden. Die Einbindung erfolgt auf Grundlage unserer berechtigten Interessen an einer technisch sicheren, wartungsfreien und effizienten Nutzung von Schriftarten, deren einheitlicher Darstellung sowie unter Berücksichtigung möglicher lizenzrechtlicher Restriktionen für deren Einbindung. Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; ebsite: <a target="_blank" href="https://fonts.google.com/">https://fonts.google.com/</a>; Datenschutzerklärung: <a target="_blank" href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>; Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA):<br>
          <a target="_blank" href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active</a></li>
          <li>
          <span class="font-weight-bold">Google Maps:</span> Wir binden die Landkarten des Dienstes “Google Maps” des Anbieters Google ein. Zu den verarbeiteten Daten können insbesondere IP-Adressen und Standortdaten der Nutzer gehören, die jedoch nicht ohne deren Einwilligung (im Regelfall im Rahmen der Einstellungen ihrer Mobilgeräte vollzogen), erhoben werden; Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; Website: <a target="_blank" href="https://cloud.google.com/maps-platform">https://cloud.google.com/maps-platform</a>; Datenschutzerklärung: <a target="_blank" href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>; Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA): https://www.privacyshield.gov/participant?id=a2zt0000000TRkEAAW&status=Active; Widerspruchsmöglichkeit (Opt-Out): Opt-Out-Plugin: <a target="_blank" href="https://tools.google.com/dlpage/gaoptout?hl=de">https://tools.google.com/dlpage/gaoptout?hl=de</a>, Einstellungen für die Darstellung von Werbeeinblendungen: <a target="_blank" href="https://adssettings.google.com/authenticated">https://adssettings.google.com/authenticated</a>.
          </li>
          <li>
          <span class="font-weight-bold">YouTube-Videos:</span> Videoinhalte; Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; Website: <a target="_blank" href="https://www.youtube.com">https://www.youtube.com</a>; Datenschutzerklärung: <a target="_blank" href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>; Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA): <a target="_blank" href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active;</a> Widerspruchsmöglichkeit (Opt-Out): Opt-Out-Plugin: <a target="_blank" href="https://tools.google.com/dlpage/gaoptout?hl=de">https://tools.google.com/dlpage/gaoptout?hl=de</a>, Einstellungen für die Darstellung von Werbeeinblendungen: <a target="_blank" href="https://adssettings.google.com/authenticated">https://adssettings.google.com/authenticated</a>.
          </li>
          <li>
          <span class="font-weight-bold">Google Analytics:</span> Wir setzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Google Analytics, einen Webanalysedienst der Google LLC („Google“) ein. Google verwendet Cookies. Die durch das Cookie erzeugten Informationen über Benutzung des Onlineangebotes durch die Nutzer werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten (<a target="_blank" href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active</a>). Google wird diese Informationen in unserem Auftrag benutzen, um die Nutzung unseres Onlineangebotes durch die Nutzer auszuwerten, um Reports über die Aktivitäten innerhalb dieses Onlineangebotes zusammenzustellen und um weitere, mit der Nutzung dieses Onlineangebotes und der Internetnutzung verbundene Dienstleistungen, uns gegenüber zu erbringen. Dabei können aus den verarbeiteten Daten pseudonyme Nutzungsprofile der Nutzer erstellt werden. Wir setzen Google Analytics nur mit aktivierter IP-Anonymisierung ein. Das bedeutet, die IP-Adresse der Nutzer wird von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Die von dem Browser des Nutzers übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Die Nutzer können die Speicherung der Cookies durch eine entsprechende Einstellung ihrer Browser-Software verhindern; die Nutzer können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf ihre Nutzung des Onlineangebotes bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter folgendem Link verfügbare Browser-Plugin herunterladen und installieren: <a target="_blank" href="http://tools.google.com/dlpage/gaoptout?hl=de">http://tools.google.com/dlpage/gaoptout?hl=de</a>. Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsmöglichkeiten, erfahren Sie in der Datenschutzerklärung von Google (<a target="_blank" href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a>) sowie in den Einstellungen für die Darstellung von Werbeeinblendungen durch Google (<a target="_blank" href="https://adssettings.google.com/authenticated">https://adssettings.google.com/authenticated</a>). Die personenbezogenen Daten der Nutzer werden nach 14 Monaten gelöscht oder anonymisiert.
          </li>
          </ul>`
        },
        {
          headline: '14. Löschung von Daten',
          text: 'Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z.B., wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind).<br>Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person erforderlich ist.<br>Weitere Hinweise zu der Löschung von personenbezogenen Daten können ferner im Rahmen der einzelnen Datenschutzhinweise dieser Datenschutzerklärung erfolgen.'
        },
        {
          headline: '15. Änderung und Aktualisierung der Datenschutzerklärung',
          text: 'Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.<br>Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.'
        },
        {
          headline: '15: Rechte der betroffenen Personen',
          text: `Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 18 und 21 DSGVO ergeben:
          <ul>
          <li>
          <span class="font-weight-bold">Widerspruchsrecht:</span> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.
          </li>
          <li>
          <span class="font-weight-bold">Widerrufsrecht bei Einwilligungen:</span> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
          </li>
          <li>
          <span class="font-weight-bold">Auskunftsrecht:</span> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
          </li>
          <li>
          <span class="font-weight-bold">Recht auf Berichtigung:</span> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
          </li>
          <li>
          <span class="font-weight-bold">Recht auf Löschung und Einschränkung der Verarbeitung:</span> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.
          </li>
          <li>
          <span class="font-weight-bold">Recht auf Datenübertragbarkeit:</span> Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.
          </li>
          <li>
          <span class="font-weight-bold">Beschwerde bei Aufsichtsbehörde:</span> Sie haben ferner nach Maßgabe der gesetzlichen Vorgaben das Recht, bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes Beschwerde einzulegen, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
          </li>
          </ul>`
        },
        {
          headline: '17. Begriffsdefinitionen',
          text: `In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO definiert. Die gesetzlichen Definitionen sind verbindlich. Die nachfolgenden Erläuterungen sollen dagegen vor allem dem Verständnis dienen. Die Begriffe sind alphabetisch sortiert.
          <ul>
          <li>
          <span class="font-weight-bold">Affiliate-Nachverfolgung:</span> Im Rahmen der Affiliate-Nachverfolgung werden Links, mit deren Hilfe die verlinkenden Webseiten Nutzer zu Webseiten mit Produkt- oder sonstigen Angeboten verweisen, protokolliert. Die Betreiber der jeweils verlinkenden Webseiten können eine Provision erhalten, wenn Nutzer diesen sogenannten Affiliate-Links folgen und anschließend die Angebote wahrnehmen (z.B. Waren kaufen oder Dienstleistungen in Anspruch nehmen). Hierzu ist es erforderlich, dass die Anbieter nachverfolgen können, ob Nutzer, die sich für bestimmte Angebote interessieren, diese anschließend auf die Veranlassung der Affiliate-Links wahrnehmen. Daher ist es für die Funktionsfähigkeit von Affiliate-Links erforderlich, dass sie um bestimmte Werte ergänzt werden, die ein Bestandteil des Links werden oder anderweitig, z.B. in einem Cookie, gespeichert werden. Zu den Werten gehören insbesondere die Ausgangswebseite (Referrer), der Zeitpunkt, eine Online-Kennung der Betreiber der Webseite, auf der sich der Affiliate-Link befand, eine Online-Kennung des jeweiligen Angebotes, eine Online-Kennung des Nutzers als auch nachverfolgungsspezifische Werte, wie, z.B. Werbemittel-ID, Partner-ID und Kategorisierungen.
          </li>
          <li><span class="font-weight-bold">Besuchsaktionsauswertung:</span> "Besuchsaktionsauswertung" (englisch "Conversion Tracking") bezeichnet ein Verfahren, mit dem die Wirksamkeit von Marketingmaßnahmen festgestellt werden kann. Dazu wird im Regelfall ein Cookie auf den Geräten der Nutzer innerhalb der Webseiten, auf denen die Marketingmaßnahmen erfolgen, gespeichert und dann erneut auf der Zielwebseite abgerufen. Beispielsweise können wir so nachvollziehen, ob die von uns auf anderen Webseiten geschalteten Anzeigen erfolgreich waren).</li>
          <li>
          <span class="font-weight-bold">Content Delivery Network (CDN):</span> Ein "Content Delivery Network" (CDN) ist ein Dienst, mit dessen Hilfe Inhalte eines Onlineangebotes, insbesondere große Mediendateien, wie Grafiken oder Programm-Skripte mit Hilfe regional verteilter und über das Internet verbundener Server, schneller und sicherer ausgeliefert werden können.
          </li>
          <li>
          <span class="font-weight-bold">Cross-Device Tracking:</span> Das Cross-Device Tracking ist eine Form des Trackings, bei der Verhaltens- und Interessensinformationen der Nutzer geräteübergreifend in sogenannten Profilen erfasst werden, indem den Nutzern eine Onlinekennung zugeordnet wird. Hierdurch können die Nutzerinformationen unabhängig von verwendeten Browsern oder Geräten (z.B. Mobiltelefonen oder Desktopcomputern) im Regelfall für Marketingzwecke analysiert werden. Die Onlinekennung ist bei den meisten Anbietern nicht mit Klardaten, wie Namen, Postadressen oder E-Mail-Adressen, verknüpft.
          </li>
          <li>
          <span class="font-weight-bold">IP-Masking:</span> Als "IP-Masking” wird eine Methode bezeichnet, bei der das letzte Oktett, d.h., die letzten beiden Zahlen einer IP-Adresse, gelöscht wird, damit die IP-Adresse nicht mehr der eindeutigen Identifizierung einer Person dienen kann. Daher ist das IP-Masking ein Mittel zur Pseudonymisierung von Verarbeitungsverfahren, insbesondere im Onlinemarketing
          </li>
          <li>
          <span class="font-weight-bold">Interessenbasiertes und verhaltensbezogenes Marketing:</span> Von interessens- und/oder verhaltensbezogenem Marketing spricht man, wenn potentielle Interessen von Nutzern an Anzeigen und sonstigen Inhalten möglichst genau vorbestimmt werden. Dies geschieht anhand von Angaben zu deren Vorverhalten (z.B. Aufsuchen von bestimmten Webseiten und Verweilen auf diesen, Kaufverhaltens oder Interaktion mit anderen Nutzern), die in einem sogenannten Profil gespeichert werden. Zu diesen Zwecken werden im Regelfall Cookies eingesetzt.
          </li>
          <li>
          <span class="font-weight-bold">Personenbezogene Daten:</span> "Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden "betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.
          </li>
          <li>
          <span class="font-weight-bold">Profiling:</span> Als "Profiling“ wird jede Art der automatisierten Verarbeitung personenbezogener Daten bezeichnet, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen (je nach Art des Profilings gehören dazu Informationen betreffend das Alter, das Geschlecht, Standortdaten und Bewegungsdaten, Interaktion mit Webseiten und deren Inhalten, Einkaufsverhalten, soziale Interaktionen mit anderen Menschen) zu analysieren, zu bewerten oder, um sie vorherzusagen (z.B. die Interessen an bestimmten Inhalten oder Produkten, das Klickverhalten auf einer Webseite oder den Aufenthaltsort). Zu Zwecken des Profilings werden häufig Cookies und Web-Beacons eingesetzt.
          </li>
          <li>
          <span class="font-weight-bold">Reichweitenmessung:</span> Die Reichweitenmessung (auch als Web Analytics bezeichnet) dient der Auswertung der Besucherströme eines Onlineangebotes und kann das Verhalten oder Interessen der Besucher an bestimmten Informationen, wie z.B. Inhalten von Webseiten, umfassen. Mit Hilfe der Reichweitenanalyse können Webseiteninhaber z.B. erkennen, zu welcher Zeit Besucher ihre Webseite besuchen und für welche Inhalte sie sich interessieren. Dadurch können sie z.B. die Inhalte der Webseite besser an die Bedürfnisse ihrer Besucher anpassen. Zu Zwecken der Reichweitenanalyse werden häufig pseudonyme Cookies und Web-Beacons eingesetzt, um wiederkehrende Besucher zu erkennen und so genauere Analysen zur Nutzung eines Onlineangebotes zu erhalten.
          </li>
          <li>
          <span class="font-weight-bold">Remarketing:</span> Vom "Remarketing“ bzw. "Retargeting“ spricht man, wenn z.B. zu Werbezwecken vermerkt wird, für welche Produkte sich ein Nutzer auf einer Webseite interessiert hat, um den Nutzer auf anderen Webseiten an diese Produkte, z.B. in Werbeanzeigen, zu erinnern.
          </li>
          <li>
          <span class="font-weight-bold">Servermonitoring und Fehlererkennung:</span> Mit Hilfe des Servermonitorings und der Fehlererkennung stellen wir die Verfügbarkeit und Integrität unseres Onlineangebotes sicher und verwenden die verarbeiteten Daten, um unser Onlineangebot technisch zu optimieren. Verarbeitet werden Leistungs-, Auslastungs- und vergleichbare technische Werte, welche Auskunft über die Stabilität und etwaige Auffälligkeiten unseres Onlineangebotes geben. Im Fall von Fehlern und Auffälligkeit werden einzelne Anfragen der Nutzer unseres Onlineangebotes erfasst, um Problemquellen zu identifizieren und zu beheben.
          </li>
          <li>
          <span class="font-weight-bold">Tracking:</span> Vom "Tracking“ spricht man, wenn das Verhalten von Nutzern über mehrere Onlineangebote hinweg nachvollzogen werden kann. Im Regelfall werden im Hinblick auf die genutzten Onlineangebote Verhaltens- und Interessensinformationen in Cookies oder auf Servern der Anbieter der Trackingtechnologien gespeichert (sogenanntes Profiling). Diese Informationen können anschließend z.B. eingesetzt werden, um den Nutzern Werbeanzeigen anzuzeigen, die voraussichtlich deren Interessen entsprechen.
          </li>
          <li>
          <span class="font-weight-bold">Verantwortlicher:</span> Als "Verantwortlicher“ wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
          </li>
          <li>
          <span class="font-weight-bold">Verarbeitung:</span> "Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das Erheben, das Auswerten, das Speichern, das Übermitteln oder das Löschen.
          </li>
          <li>
          <span class="font-weight-bold">Zielgruppenbildung:</span> Von Zielgruppenbildung (bzw. "Custom Audiences“) spricht man, wenn Zielgruppen für Werbezwecke, z.B. Einblendung von Werbeanzeigen, bestimmt werden. So kann z.B. anhand des Interesses eines Nutzers an bestimmten Produkten oder Themen im Internet geschlussfolgert werden, dass dieser Nutzer sich für Werbeanzeigen für ähnliche Produkte oder den Onlineshop, in dem er die Produkte betrachtet hat, interessiert. Von "Lookalike Audiences“ (bzw. ähnlichen Zielgruppen) spricht man wiederum, wenn die als geeignet eingeschätzten Inhalte Nutzern angezeigt werden, deren Profile bzw. Interessen mutmaßlich den Nutzern, zu denen die Profile gebildet wurden, entsprechen. Zu Zwecken der Bildung von Custom Audiences und Lookalike Audiences werden im Regelfall Cookies und Web-Beacons eingesetzt.
          </li>
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
    font-size: 106px;
  }
}
</style>
