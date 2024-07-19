import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      //header
      "Venues": "Venues", 
      "Events": "Events", 
      "About" : "About", 
      "BuyTickets": "Buy Tickets",
      //footer
      "Contact" : "Contact", 
      "Email": "Email",
      "PhoneNumber": "Phone Number",
      "Hours": "Hours",
      "FridaySunday": "Friday - Sunday",
      "MondayThursday": "Monday - Thursday",
      "Location": "Location",
      //home page 
      "Welcome to The WA Concert Venue": "Welcome to The WA Concert Venue",
      "Your ultimate destination for the latest concerts and events. Explore upcoming events, book tickets, and stay updated with our latest news.": "Your ultimate destination for the latest concerts and events. Explore upcoming events, book tickets, and stay updated with our latest news.",
      //newsletter
      "Subscribe": "Subscribe to our Newsletter",
      "emailError":'Please enter a valid email address.', 
      "submitNewsLetter" : "Submit", 
      "Enter your email": "Enter your email",
      'Subscribed with: ' : 'Subscribed with: ',
      //about us 
      'About Us': 'About Us',
      'Welcome to The WA, Ottawas premier concert venue!' : 'Welcome to The WA, Ottawas premier concert venue!', 
      'We are thrilled to have you here. Explore upcoming events, buy tickets, and stay updated with our latest news.' : 'We are thrilled to have you here. Explore upcoming events, buy tickets, and stay updated with our latest news.', 
      //Connect With Others
      'Connect With Others' : 'Connect With Others', 
      //feedback 
      'We value your feedback!': 'We value your feedback!', 
      'Thank you for your feedback!' : 'Thank you for your feedback!', 
      "Enter your feedback here..." : "Enter your feedback here...", 
      "Answer:": "Answer", 
      "Don't See Your Question? Submit It Here" : "Don't See Your Question? Submit It Here", 
      "Thank you for your question!" : "Thank you for your question!", 
      "Enter your question here..." : "Enter your question here...", 
      'One of our representatives will be right with the answer to your question ' : 'One of our representatives will be right with the answer to your question ', 
      //buy ytickets
      
      "EventDetails": "Event Details",
      "BackToEvents": "Back To Events",
      "EventArtist": "Event/Artist",
      "Date": "Date",
      "EnterCardInformation": "Enter Card Information",
      "CardNumber": "Card Number",
      "ExpirationDate": "Expiration Date (MM/YY)",
      "CCV": "CCV",
      "EnterPersonalInformation": "Enter Personal Information",
      "FirstName": "First Name",
      "LastName": "Last Name",
      "Address": "Address",
      //venues
      "More Info": "More Info" , 
      "Stage A" : "Stage A: Known for its incredible acoustics, Stage A has hosted numerous iconic performances. Established in 1980, it has a rich history of musical excellence.", 
      "Stage B" : "Stage B: The heart of our outdoor events, Stage B offers a unique open-air experience. It was established in 1995 and has been a favorite for summer festivals.",
      "Stage C": "Stage C: A modern venue with state-of-the-art facilities, Stage C is perfect for contemporary performances. It has been operational since 2005",
      //buy tickets
      "Select an event to see the details": "Select an event to see the details",
      
      "Description": "Description",
      
      "All Events": "All Events",
      "Search for an artist": "Search for an artist",
      "Genre": "Genre",
      "Type": "Type",
      "Decade": "Decade",
      "Clear All Filters": "Clear All Filters",
      "Event/Artist is required": "Event/Artist is required",
      "Event/Artist is not playing": "Event/Artist is not playing",
      "Date is required": "Date is required",
      "Invalid date format (MM/YY)": "Invalid date format (MM/YY)",
      "Invalid card number": "Invalid card number",
      "Invalid expiration date (MM/YY)": "Invalid expiration date (MM/YY)",
      "Invalid CCV": "Invalid CCV",
      "First name is required": "First name is required",
      "Last name is required": "Last name is required",
      "Address is required": "Address is required",
      "Invalid email address": "Invalid email address",
      
     




      
      
      
    

   
    }
  },
  fr: {
    translation: {

         //header
      "Venues": "Lieux", 
      "Events": "Épreuves", 
      "About" : "Environ", 
      "BuyTickets": "Acheter des billets",
      //footer
      "Contact": "Contacter",
      "Email": "Courriel",
      "PhoneNumber": "Numéro de téléphone",
      "Hours": "Heures",
      "FridaySunday": "Vendredi - Dimanche",
      "MondayThursday": "Lundi - Jeudi",
      "Location": "Emplacement",
      //home
      "Welcome to The WA Concert Venue": "Bienvenue à la salle de concert WA",
      "Your ultimate destination for the latest concerts and events. Explore upcoming events, book tickets, and stay updated with our latest news.": "Votre destination ultime pour les derniers concerts et événements. Explorez les événements à venir, réservez des billets et restez au courant de nos dernières nouvelles.",
      // newsletter
      "Subscribe" : "Abonnez-vous à notre newsletter", 
      "emailError": "Veuillez saisir une adresse e-mail valide.",
      "submitNewsLetter": "Envoyer",
      "Enter your email": "Entrez votre adresse e-mail", 
      'Subscribed with: ' :" Abonné avec :",
        //aboutus
        'About Us': 'Qui sommes-nous', 
        'Welcome to The WA, Ottawas premier concert venue!' : 'Bienvenue au WA, la première salle de concert d’Ottawa !', 
        'We are thrilled to have you here. Explore upcoming events, buy tickets, and stay updated with our latest news.' : 'Nous sommes ravis de vous avoir ici. Explorez les événements à venir, achetez des billets et restez au courant de nos dernières nouvelles.', 
        //Connect With Others
        'Connect With Others' : 'Connectez-vous avec les autres', 
        //feedback 
        'We value your feedback!': 'Nous apprécions vos commentaires!',
        'Thank you for your feedback!': 'Merci pour vos commentaires!', 
        "Enter your feedback here..." : "Entrez vos commentaires ici...",
        //faq
       "Answer:": "répondre", 
       "Don't See Your Question? Submit It Here": "Vous ne voyez pas votre question ? Soumettez-le ici", 
       "Thank you for your question!" : "Merci pour votre question !", 
       "Enter your question here..." : "Entrez votre question ici...", 
        "One of our representatives will be right with the answer to your question ": "L’une de nos représentantes répondra à votre question", 
        //buy tickets 

      "EventDetails": "Détails de l'événement",
      "BackToEvents": "Retour aux événements",
      "EventArtist": "Événement/Artiste",
      "Date": "Date",
      "EnterCardInformation": "Entrer les informations de la carte",
      "CardNumber": "Numéro de carte",
      "ExpirationDate": "Date d'expiration (MM/AA)",
      "CCV": "CCV",
      "EnterPersonalInformation": "Entrer les informations personnelles",
      "FirstName": "Prénom",
      "LastName": "Nom de famille",
      "Address": "Adresse",

      //venues
      "More Info" :" Plus d’infos", 
     "Stage A" : "Scène A : Connue pour son acoustique incroyable, la scène A a accueilli de nombreuses performances emblématiques. Fondée en 1980, elle a une riche histoire d’excellence musicale.", 
      "Stage B" : "Stage B : Cœur de nos événements en plein air, Stage B offre une expStage C: A modern venue with state-of-the-art facilities, Stage C is perfect for contemporary performances. It has been operational since 2005érience unique en plein air. Il a été créé en 1995 et a été un favori pour les festivals d’été.",
      "Stage C": "Stage C : Un lieu moderne doté d’installations ultramodernes, Stage C est parfait pour les spectacles contemporains. Il est opérationnel depuis 2005",
        //buy tickets
        "Select an event to see the details": "Sélectionnez un événement pour voir les détails",
        
        "Description": "Description",
        "Genre": "Genre",
        "Type": "Type",
        "Decade": "Décennie",

        "All Events": "Tous les événements",
      "Search for an artist": "Rechercher un artiste",

      "Clear All Filters": "Effacer tous les filtres",
      "Event/Artist is required": "Événement/Artiste est requis",
      "Event/Artist is not playing": "Événement/Artiste ne joue pas",
      "Date is required": "La date est requise",
      "Invalid date format (MM/YY)": "Format de date invalide (MM/AA)",
      "Invalid card number": "Numéro de carte invalide",
      "Invalid expiration date (MM/YY)": "Date d'expiration invalide (MM/AA)",
      "Invalid CCV": "CCV invalide",
      "First name is required": "Le prénom est requis",
      "Last name is required": "Le nom de famille est requis",
      "Address is required": "L'adresse est requise",
      "Invalid email address": "Adresse e-mail invalide",

      "Buy Tickets": "Acheter des billets",
      "Event Details": "Détails de l'événement",
      "Back to Events": "Retour aux événements",
      "Event/Artist": "Événement/Artiste",
   
      "Enter Card Information": "Entrer les informations de la carte",
      "Card Number": "Numéro de carte",
      "Expiration Date (MM/YY)": "Date d'expiration (MM/AA)",
     
      "Enter Personal Information": "Entrer les informations personnelles",
      "First Name": "Prénom",
      "Last Name": "Nom de famille",
      
      
      "Submit": "Soumettre",
      
      
     


    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
