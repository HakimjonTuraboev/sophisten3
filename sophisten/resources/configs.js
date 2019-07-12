/**
 * @overview configs of ccm component sophist
 * @author Manfred Kaul <manfred.kaul@h-brs.de> 2019
 * @license The MIT License (MIT) mkaul2m on 13.06.2019.
 */

  ccm.files[ 'configs.js' ] = {
    //Demo oder FunktionsMASTeR ohne Bedingung
    "demo": {
      key: "demo",
      "html.main.inner.0.inner": "FunktionsMASTeR ohne Bedingung",
      data: {
        "store": [ "ccm.store", 'https://ccmjs.github.io/mkaul-components/sophist/resources/datasets.js' ],
        "key": "demo"
      }
    },
    //FunktionsMASTeR ohne Bedingung
    "FunktionsMASTeR_oB": {
      key: "FunktionsMASTeR_oB",
      data: {
        "store": [ "ccm.store", 'https://ccmjs.github.io/mkaul-components/sophist/resources/datasets.js' ],
        "key": "demo"
      }
    },

    //FunktionsMASTeR mit Bedingung
    "FunktionsMASTeR_mB": {
      "html.main.inner.0.inner":"FunktionsMASTeR mit Bedingung",
      key: "FunktionsMASTeR_mB",
      headers: ["Bedingung","Verbindlichkeit","Systemname","Funktionalität","Objekt","Prozesswort", "Buttons"],
      columns: ["bedingung","modal","system","func","object","process"],
      initial_values: {
        bedingung: "Bedingung",
        system: "das System",
        object: " das Objekt",
        process: " das Prozesswort"
      },

      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "FunktionsMASTeR_mB"
      }
    },
    // Detaillierter FunktionsMASTeR ohne Bedingung
    "D_FunktionsMASTeR_oB": {
      "html.main.inner.0.inner":"Detaillierter FunktionsMASTeR ohne Bedingung",
      key: "D_FunktionsMASTeR_oB",
      headers: ["Systemname","Verbindlichkeit","Funktionalität","Präzisierung1","Objekt","Präzisierung2","Konkretisierung","Prozesswort", "Buttons"],
      columns: ["system","modal","func","präzisiere1","object","präzisiere2", "konkretisiere","process"],
      initial_values: {
        system: "das System",
        object: " das Objekt",
        process: " das Prozesswort",
        system: "Das System",
        präzisiere1:"Detail fürs Objekt",
        präzisiere2:"Detail fürs Objekt",
        konkretisiere:"Detail fürs Prozesswort",
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "D_FunktionsMASTeR_oB"
      }
    },
    // Detaillierter FunktionsMASTeR mit Bedingung
    "D_FunktionsMASTeR_mB": {
      "html.main.inner.0.inner":"Detaillierter FunktionsMASTeR mit Bedingung",
      key: "D_FunktionsMASTeR_mB",
      headers: ["Bedingung","Verbindlichkeit","Systemname","Funktionalität","Präzisierung1","Objekt","Präzisierung2","Konkretisierung","Prozesswort", "Buttons"],
      columns: ["bedingung","modal","system","func","präzisiere1","object","präzisiere2", "konkretisiere","process"],
      initial_values: {
        bedingung:"Bedingung",
        system: "das System",
        object: "das Objekt",
        process: "das Prozesswort",
        präzisiere1:"Detail fürs Objekt",
        präzisiere2:"Detail fürs Objekt",
        konkretisiere:"Detail fürs Prozesswort",
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "D_FunktionsMASTeR_mB"
      }
    },
    // EigenschaftsMASTeR
    "EigenschaftsMASTeR": {
      "html.main.inner.0.inner":"EigenschaftsMASTeR",
      key: "EigenschaftsMASTeR",
      headers: ["Eigenschaft","Betrachtendes","Verbindlichkeit","Vergleich","Wert","SEIN","Buttons"],
      columns: ["eigenschaft","betrachtendes","modal","vergleich", "wert", "sein"],
      initial_values: {
        betrachtendes:"Betrachtungsgegenstand",
        eigenschaft:"Eigenschaft",
        vergleich:"Vergleichsoperator",
        wert:"Wert",
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "EigenschaftsMASTeR"
      }
    },
    // UmgebungsMASTeR
    "UmgebungsMASTeR":{
      "html.main.inner.0.inner":"UmgebungsMASTeR",
      key: "UmgebungsMASTeR",
      headers: ["(Komponente des)+Betrachtendes","Verbindlichkeit","so gestaltet sein, dass","(Bedingung)+ Betrachtendes","Eigenschaft","(Vergleich)+Wert","betrieben werden kann", "Buttons"],
      columns: ["komponente",                  "modal",          "gestaltet",             "betrachtendes","eigenschaft", "vergleich",        "betrieben"],
      initial_values: {
        komponente:"(Komponente des) Betrachtendes",
        eigenschaft:"Eigenschaft",
        vergleich:"(Vergleich)+Wert",
        wert:"Wert",
        betrachtendes: "Bedingung"
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "UmgebungsMASTeR"
      }
    },
    // ProzessMASTeR
    "ProzessMASTeR":{
      "html.main.inner.0.inner":"ProzessMASTeR",
      key: "ProzessMASTeR",
      headers: [ "Buttons"],
      headers: ["Akteurname","Verbindlichkeit","(Präzisierung des   Objekts)","Objekt","(Präzisierung des Objekts)","(Konkretisierung des Prozessworts)","Prozesswort","Buttons"],
      columns: ["system","modal","präzisiere1","object", "präzisiere2", "konkretisiere", "process"],
      initial_values: {
        system:"Name des Akteurs",
        modal:"Verbindlichkeit",
        präzisiere1:"Detail fürs Objekt",
        object:"Objekt",
        präzisiere2: "Detail fürs Objekt",
        process: "Prozesswort",
        konkretisiere: "Detail fürs Prozesswort"
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "ProzessMASTeR"
      }
    },
    // BedingungsMASTeR für logische Aussage
    "BedingungsMASTeR_logik":{
      "html.main.inner.0.inner":"BedingungsMASTeR für logische Aussage",
      key: "BedingungsMASTeR_logik",
      headers: ["Kojunktion", "logische Aussage","Anforderungshauptsatz","Buttons"],
      columns: ["konjunkt2","präzisiere1","präzisiere2",],
      initial_values: {
        präzisiere1:"logische Ausssage",
        präzisiere2: "Anforderungshauptsatz",
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "BedingungsMASTeR_logik"
      }
    },

    // BedingungsMASTeR für Ereignis
    "BedingungsMASTeR_ereignis":{
      "html.main.inner.0.inner":"BedingungsMASTeR für Ereignis",
      key: "BedingungsMASTeR_ereignis",
      headers: ["Kojunktion", "Ereignis","Anforderungshauptsatz","Buttons"],
      columns: ["konjunkt1","präzisiere1","präzisiere2",],
      initial_values: {
        präzisiere1:"Ereignis",
        präzisiere2: "Anforderungshauptsatz",
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "BedingungsMASTeR_ereignis"
      }
    },

    // BedingungsMASTeR für Zeitraum
    "BedingungsMASTeR_zeitraum":{
      "html.main.inner.0.inner":"BedingungsMASTeR für Zeitraum",
      key: "BedingungsMASTeR_zeitraum",
      headers: ["Kojunktion", "Ereignis","Anforderungshauptsatz","Buttons"],
      columns: ["konjunkt3","präzisiere1","präzisiere2",],
      initial_values: {
        präzisiere1:"Zeitraum",
        präzisiere2: "Anforderungshauptsatz",
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "BedingungsMASTeR_zeitraum"
      }
    },

    // FunctionalMASTeR without condition
    "FunctionalM":{
      "html.main.inner.0.inner":"FunctionalMASTeR without condition",
      key: "FunctionalM",
      headers: ["System name", "Commitment", "Functionality",  "Process verb","Object", "Buttons"],
      columns: ["system","modal_e","func_e","process","object",],
      initial_values: {
        system: "The system",
        object: "a object",
        process: "a process verb",
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "FunctionalM"
      }
    },
    //FunctionalMASTeR with condition
    "FunctionalM_wC":{
      "html.main.inner.0.inner":"FunctionalMASTeR with condition",
      key: "FunctionalM_wC",
      headers: ["Condition","System name", "Commitment", "Functionality",  "Process verb","Object", "Buttons"],
      columns: ["bedingung","system","modal_e","func_e","process","object",],
      initial_values: {
        system: "the system",
        object: "a object",
        process: "a process verb",
        bedingung:"condition,"
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "FunctionalM_wC"
      }
    },

    //Detailed functionalMASTeR
    "D_FunctionalM":{
      "html.main.inner.0.inner":"Detailed functionalMASTeR",
      key: "D_FunctionalM",
      headers: ["System name", "Commitment", "Functionality",  "Process verb","Direct objects","Indirect objects", "Buttons"],
      columns: ["system","modal_e","func_e","process","präzisiere1","konkretisiere"],
      initial_values: {
        system: "The system",
        process: "a process verb",
        präzisiere1:"direct objects",
        konkretisiere:"indirect objects"
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "D_FunctionalM"
      }
    },

    //Detailed functionalMASTeR with condition
    "D_FunctionalMwC":{
      "html.main.inner.0.inner":"Detailed functionalMASTeR with condition",
      key: "D_FunctionalMwC",
      headers: ["Condition","System name", "Commitment", "Functionality",  "Process verb","Direct objects","Indirect objects", "Buttons"],
      columns: ["bedingung","system","modal_e","func_e","process","präzisiere1","konkretisiere"],
      initial_values: {
        bedingung:"Condition",
        system: "the system",
        process: "a process verb",
        präzisiere1:"direct objects",
        konkretisiere:"indirect objects"
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "D_FunctionalMwC"
      }
    },
    //properity MASTeR
    "D_FunctionalMwC":{
      "html.main.inner.0.inner":"properity MASTeR",
      key: "D_FunctionalMwC",
      headers: ["Condition","System name", "Commitment", "Functionality",  "Process verb","Direct objects","Indirect objects", "Buttons"],
      columns: ["bedingung","system","modal_e","func_e","process","präzisiere1","konkretisiere"],
      initial_values: {
        bedingung:"Condition",
        system: "the system",
        process: "a process verb",
        präzisiere1:"direct objects",
        konkretisiere:"indirect objects"
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "D_FunctionalMwC"
      }
    },
    //Environment MASTeR
    "D_FunctionalMwC":{
      "html.main.inner.0.inner":"Environment MASTeR",
      key: "D_FunctionalMwC",
      headers: ["Condition","System name", "Commitment", "Functionality",  "Process verb","Direct objects","Indirect objects", "Buttons"],
      columns: ["bedingung","system","modal_e","func_e","process","präzisiere1","konkretisiere"],
      initial_values: {
        bedingung:"Condition",
        system: "the system",
        process: "a process verb",
        präzisiere1:"direct objects",
        konkretisiere:"indirect objects"
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "D_FunctionalMwC"
      }
    },
    //Process MASTeR
    "D_FunctionalMwC":{
      "html.main.inner.0.inner":"Process MASTeR",
      key: "D_FunctionalMwC",
      headers: ["Condition","System name", "Commitment", "Functionality",  "Process verb","Direct objects","Indirect objects", "Buttons"],
      columns: ["bedingung","system","modal_e","func_e","process","präzisiere1","konkretisiere"],
      initial_values: {
        bedingung:"Condition",
        system: "the system",
        process: "a process verb",
        präzisiere1:"direct objects",
        konkretisiere:"indirect objects"
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "D_FunctionalMwC"
      }
    },

    //Condition logical expression
    "condition_logical":{
      "html.main.inner.0.inner":"Condition logical expression",
      key: "condition_logical",
      headers: ["Kojunktion", "logische Aussage","Anforderungshauptsatz","Buttons"],
      columns: ["konjunkt2_e","präzisiere1","präzisiere2",],
      initial_values: {
        präzisiere1:"logical expression",
        präzisiere2: "requirements-main clause",
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "condition_logical"
      }
    },

    // Condition event
    "condition_event":{
      "html.main.inner.0.inner":"Condition event",
      key: "condition_event",
      headers: ["Kojunktion", "Ereignis","Anforderungshauptsatz","Buttons"],
      columns: ["konjunkt1_e","präzisiere1","präzisiere2",],
      initial_values: {
        präzisiere1:"event",
        präzisiere2: "requirements-main clause",
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "condition_event"
      }
    },

    // Condition time
    "condition_time":{
      "html.main.inner.0.inner":"Condition time",
      key: "condition_time",
      headers: ["Kojunktion", "Ereignis","Anforderungshauptsatz","Buttons"],
      columns: ["konjunkt3_e","präzisiere1","präzisiere2",],
      initial_values: {
        präzisiere1:"time",
        präzisiere2: "requirements-main clause",
      },
      data: {
        "store": [ "ccm.store", 'resources/datasets.js' ],
        "key": "condition_time"
      }
    },
};