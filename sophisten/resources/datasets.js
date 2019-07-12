/**
 * @overview datasets for ccm component sophist
 * @version 0.0.1
 * @author mkaul2m Manfred.Kaul@h-brs.de
 * @copyright The MIT License (MIT) mkaul2m on 13.06.2019.
 */

ccm.files[ 'datasets.js' ] = {
   //Demo oder FunktionsMASTeR ohne Bedingung
  "demo": {
    "key": "demo",
    "rows": [
      {
        system: "Das System",
        modal: "MUSS",
        func: "die Möglichkeit bieten",
        object: "die Bezahlung",
        process: "zu berechnen"
      },
      {
        system: "Das Kassensystem",
        modal: "SOLLTE",
        func: "fähig sein",
        object: "die Daten",
        process: "zu speichern"
      }
    ]

  },
  //FunktionsMASTeR mit Bedingung
  "FunktionsMASTeR_mB": {
    "key": "FunktionsMASTeR_mB",

    "rows": [
      {
        bedingung: "Solange der Scanner an ist",
        system: "das System",
        modal: "MUSS",
        func: "die Möglichkeit bieten",
        object: "die Bezahlung",
        process: "zu berechnen"
      },
      {
        bedingung: "Sobald Fehler auftritt",
        system: "das Kassensystem",
        modal: "SOLLTE",
        func: "fähig sein",
        object: "die Daten",
        process: "zu speichern"
      }
    ]
  },
  // Detaillierter FunktionsMASTeR ohne Bedingung
  "D_FunktionsMASTeR_oB": {
    "key": "D_FunktionsMASTeR_oB",
    "rows": [
      {
        system: "Das System",
        modal: "MUSS",
        func: "fähig sein",
        präzisiere1:"die selektierten",
        object: "Bezahlungsdaten",
        präzisiere2:"eines regstrierten Kunden",
        konkretisiere:"auf dem CD",
        process: "zu speichern"
      },

    ]

  },
  // Detaillierter FunktionsMASTeR mit Bedingung
  "D_FunktionsMASTeR_mB": {
    "key": "D_FunktionsMASTeR_mB",
    "rows": [
      {
        bedingung:"Sobald Systemspeicher voll ist,",
        system: "Das System",
        modal: "MUSS",
        func: "fähig sein",
        präzisiere1:"die selektierten",
        object: "Bezahlungsdaten",
        präzisiere2:"eines regstrierten Kunden",
        konkretisiere:"auf dem CD",
        process: "zu speichern"
      },
    ]
  },
  // EigenschaftsMASTeR
  "EigenschaftsMASTeR": {
    "key": "EigenschaftsMASTeR",
    "rows": [
      {
        eigenschaft:"Die Länge",
        betrachtendes:"des Eingabefensters",
        modal: "MUSS",
        vergleich:"gleich",
        wert:"lang",
        sein: "sein",
      },
    ]
  },
  // UmgebungsMASTeR
  "UmgebungsMASTeR":{
    "key": "UmgebungsMASTeR",
    "rows": [
      {
        komponente: "Lesegerät des Systems",
        modal: "MUSS",
        gestaltet: "so gestaltet sein, dass",
        betrachtendes:"Bedingung + das System",
        eigenschaft:"bei der Weite",
        vergleich:"von 4 cm bis 100 cm",
        betrieben:"betrieben werden kann",
      },
    ]
  },

  // ProzessMASTeR
  "ProzessMASTeR": {
    "key": "ProzessMASTeR",
    "rows": [
      {
        system: "Der Auftraggeber",
        modal: "MUSS",
        präzisiere1:"die ausgelisteten",
        object: "Mitarbeiter",
        präzisiere2:"des Unternehmens",
        konkretisiere:"jährlich",
        process: "schulen"
      },
    ]
  },

  // BedingungsMASTeR für logische Aussage
  "BedingungsMASTeR_logik": {
    "key": "BedingungsMASTeR_logik",
    "rows": [
      {
        konjunkt2:"Falls",
        präzisiere1:"die Karte gesperrt ist,",
        präzisiere2: "Anforderungshauptsatz"
      },
    ]
  },
  // BedingungsMASTeR für Ereignis
  "BedingungsMASTeR_ereignis": {
    "key": "BedingungsMASTeR_ereignis",
    "rows": [
      {
        konjunkt1:"Sobald",
        präzisiere1:"der Kunde bezahlt hat,",
        präzisiere2: "Anforderungshauptsatz"
      },
    ]
  },
  // BedingungsMASTeR für Zeitraum
  "BedingungsMASTeR_zeitraum": {
    "key": "BedingungsMASTeR_zeitraum",
    "rows": [
      {
        konjunkt3:"Solange",
        präzisiere1:"das System angeschaltet ist,",
        präzisiere2: "Anforderungshauptsatz"
      },
    ],
  },
  // FunctionalMASTeR without condition
  "FunctionalM": {
    "key": "FunctionalM",
    "rows": [
      {
        system:"The labrary system",
        modal_e:"SHALL",
        func_e:"PROVIDE (labrarian WITH) ABILITY TO",
        process: "print",
        object:"the pdf-file",
      },
    ],
  },

  // FunctionalMASTeR with condition
  "FunctionalM_wC": {
    "key": "FunctionalM_wC",
    "rows": [
      {
        bedingung:"If the user is logged in,",
        system:"the labrary system",
        modal_e:"SHALL",
        func_e:"PROVIDE (labrarian WITH) ABILITY TO",
        process: "print",
        object:"the pdf-file",
      },
    ],
  },
  // Detailed functionalMASTeR
  "D_FunctionalM": {
    "key": "D_FunctionalM",
    "rows": [
      {
        system:"the labrary system",
        modal_e:"SHALL",
        func_e:"PROVIDE (labrarian WITH) ABILITY TO",
        process: "print",
        präzisiere1:" selected colored photos ",
        konkretisiere:"at   the net-work printer",

      },
    ],
  },
  //Detailed functionalMASTeR with condition
  "D_FunctionalMwC": {
    "key": "D_FunctionalMwC",
    "rows": [
      {
        bedingung:"If the user is logged in,",
        system:"the labrary system",
        modal_e:"SHALL",
        func_e:"PROVIDE (labrarian WITH) ABILITY TO",
        process: "print",
        präzisiere1:"selected colored photos ",
        konkretisiere:"at the net-work printer",
      },
    ],
  },
  //Properity MASTeR
  "D_FunctionalMwC": {
    "key": "D_FunctionalMwC",
    "rows": [
      {
        bedingung:"If the user is logged in,",
        system:"the labrary system",
        modal_e:"SHALL",
        func_e:"PROVIDE (labrarian WITH) ABILITY TO",
        process: "print",
        präzisiere1:"selected colored photos ",
        konkretisiere:"at the net-work printer",
      },
    ],
  },
  //Environment MASTeR
  "D_FunctionalMwC": {
    "key": "D_FunctionalMwC",
    "rows": [
      {
        bedingung:"If the user is logged in,",
        system:"the labrary system",
        modal_e:"SHALL",
        func_e:"PROVIDE (labrarian WITH) ABILITY TO",
        process: "print",
        präzisiere1:"selected colored photos ",
        konkretisiere:"at the net-work printer",
      },
    ],
  },
  //Process MASTeR
  "D_FunctionalMwC": {
    "key": "D_FunctionalMwC",
    "rows": [
      {
        bedingung:"If the user is logged in,",
        system:"the labrary system",
        modal_e:"SHALL",
        func_e:"PROVIDE (labrarian WITH) ABILITY TO",
        process: "print",
        präzisiere1:"selected colored photos ",
        konkretisiere:"at the net-work printer",
      },
    ],
  },
  //Condition logical expression
  "condition_logical": {
    "key": "condition_logical",
    "rows": [
      {
        konjunkt2_e:"IF",
        präzisiere1:"the card is blocked,",
        präzisiere2: "requirements-main clause"
      },
    ]
  },
  // Condition event
  "condition_event": {
    "key": "condition_event",
    "rows": [
      {
        konjunkt1_e:"AS SOON AS",
        präzisiere1:"the customer has paid,",
        präzisiere2: "requirements-main clause"
      },
    ]
  },
  // Condition time
  "condition_time": {
    "key": "condition_time",
    "rows": [
      {
        konjunkt3_e:"AS LONG AS",
        präzisiere1:"the system is switched on,",
        präzisiere2: "requirements-main clause"
      },
    ],
  },
};