function cameraHome(){
    camera('default');
    window.focused = "default";
    
    $('#popup').hide();
}

function cameraInnovazione(){
    camera('innovazione');
    $('#popup').hide();
}

function clickInnovazione(){
    window.focused = "innovazioneCamera";
    
    var data = window.dataManager.data;
    var anno = $("#anni").val();
    
    var unita = data[anno]["Innovazione"]["unity"];
    var valore = data[anno]["Innovazione"]["values"][0];  
  
    $("#tipo").html("Obiettivo strategico: Investire nella ricerca sui temi");
    $("#testo").html("L'obiettivo e' da un lato quello di potenziare il supporto agli investimenti nella ricerca su questi temi, e dall'altro di valorizzare le competenze dei docenti dell'ateneo e dare maggiore visibilita' ai risultati dei progetti realizzati su tematiche sostenibili.");
    $("#nomeValore").html("Fondi destinati all'innovazione: <b>" + String(valore) + String(unita) + "</b>");
    
    $('#popup').show();
}

function cameraGovernance(){
    camera('governance');
    $('#popup').hide();
}

function clickGovernance(){
    window.focused = "governanceCamera";
    
    var data = window.dataManager.data;
    var anno = $("#anni").val();
    
    var unita = data[anno]["Governance"]["unity"];
    var valore = data[anno]["Governance"]["values"];
    
    var media = 0;
    for(var i = 0; i < valore.length; i++){
        media += valore[i];
    }
    
    media /= valore.length;
    
    $("#tipo").html("Obiettivo strategico: promuovere la politica di sostenibilità");
    $("#testo").html("Nell'area governance vengono raggruppate tutte le azioni che riguardano le linee strategiche adottate da Ca' Foscari e le azioni messe in campo per integrare la promozione della sostenibilita' nella policy e nelle scelte operative dell'ateneo: sono quindi impegni che riguardano l'area istituzionale dell'ateneo.");
    $("#nomeValore").html("Media voti: <b>" + String(media) + "</b>");
    
    $('#popup').show();
}

function cameraPolitichePersonale(){
    camera('pol_personale');
    $('#popup').hide();
}

function clickPolitichePersonale(){
    window.focused = "pol_personaleCamera";
    
    var data = window.dataManager.data;
    var anno = $("#anni").val();
    
    var unita = data[anno]["Politiche Personale"]["unity"];
    var valore = data[anno]["Politiche Personale"]["values"][0];  
  
    $("#tipo").html("Obiettivi strategici: promuovere il benessere dei lavoratori e promuovere l'assunzione di responsabilita' del personale");
    $("#testo").html("Per sostenere i propri dipendenti che per vari motivi necessitano di essere maggiormente presenti a casa, l'ateneo emette ogni anno un bando per prestazioni lavorative in telelavoro. L'obiettivo dell'Area Risorse Umane e' di incrementare ogni anno il monte ore disponibile in modo da permettere a tutti i dipendenti che ne facciano richiesta l'attivazione di questo tipo di contratto.");
    $("#nomeValore").html("Proporzione ore di lavoro telematico: <b>" + String(valore) + String(unita) + "</b>" + " del lavoro totale");
    
    $('#popup').show();
}

function cameraPoliticheStudenti(){
    camera('pol_studenti');
    $('#popup').hide();
}

function clickPoliticheStudenti(){  
    window.focused = "pol_studentiCamera";
    
    var data = window.dataManager.data;
    var anno = $("#anni").val();
    
    var unita = data[anno]["Politiche Studenti"]["unity"];
    var valore = data[anno]["Politiche Studenti"]["values"][0];  
  
    $("#tipo").html("Obiettivo strategico: promuovere la soddisfazione degli studenti");
    $("#testo").html("In quest'area vengono inserite le azioni che mirano ad aumentare il benessere degli studenti e a rendere la loro esperienza presso l'ateneo piu' soddisfacente e piu' proficua. Rientrano quindi le azioni per migliorare l'efficienza e l'efficacia dei servizi agli studenti, con particolare attenzione alle situazioni di difficolta'. Sono comprese in quest'area anche tutte le iniziative volte a promuovere la diffusione della cultura della sostenibilita' presso gli studenti.");
    $("#nomeValore").html("Voto medio assegnato all'ateneo dagli studenti: <b>" + String(valore) + "</b>");
    
    $('#popup').show();
}

function cameraMateriali(){
    camera('materiali');
    $('#popup').hide();
}

function clickMateriali(){
    window.focused = "materialiCamera";
    
    var data = window.dataManager.data;
    var anno = $("#anni").val();
    
    var unita = data[anno]["Materiali"]["unity"];
    var valore = data[anno]["Materiali"]["values"][0];  
  
    $("#tipo").html("Obiettivo strategico: Tutelare l'ambiente e il territorio");
    $("#testo").html("In questa area sono raccolte tutte le attivita' di digitalizzazione e dematerializzazione, ossia informatizzazione delle procedure e sostituzione dei documenti cartacei con documenti digitali. Questo permette al nostro Ateneo di aumentare l'efficienza, l'accessibilita' e la qualita' dei servizi, di migliorare i processi interni e di ridurre l'utilizzo di risorse cartacee, quindi lo spreco di materiali.");
    $("#nomeValore").html("Proporzione documenti digitalizzati: <b>" + String(valore) + String(unita) + "</b> dei documenti totali");
    
    $('#popup').show();
}

function cameraEnergia(){
    camera('energia');
    $('#popup').hide();
}

function clickEnergia(){
    window.focused = "energiaCamera";
    
    var data = window.dataManager.data;
    var anno = $("#anni").val();
    
    if (anno == 2011){
        $("#tipo").html("Neesun dato");
        $("#testo").html("Per quest anno non ci sono dati disponibili.");
        $("#nomeValore").html("");
    }
    else{   
        var unita = data[anno]["Energia"]["unity"];
        var valore = data[anno]["Energia"]["values"][0];  

        $("#tipo").html("Obiettivo strategico: Migliorare l'efficienza energetica");
        $("#testo").html("In questa area sono raccolte tutte le azioni che riguardano la gestione dell'energia dell'ateneo. Qui convergono anche gli impegni relativi al Carbon Management, che una volta terminata la fase sperimentale del progetto sono stati inseriti tra le prassi energetiche dell'ateneo.");
        $("#nomeValore").html("Energia utilizzata: <b>" + String(valore) + String(unita) + "</b>");
    }
    
    $('#popup').show();
}

function cameraAcqua(){
    camera('acqua');
    $('#popup').hide();
}

function clickAcqua(){
    window.focused = "acquaCamera";    
    
    var data = window.dataManager.data;
    var anno = $("#anni").val();
    
    var unita = data[anno]["Acqua"]["unity"];
    var valore = data[anno]["Acqua"]["values"][0];  
    
    $("#tipo").html("Obiettivo strategico: Migliorare l'efficienza energetica");
    $("#testo").html("In questa area sono raccolte tutte le attivita' utili all'avviare di un piano operativo per la gestione dell'acqua all'interno dell'ateneo. Oltre agli impegni specifici relativi ai consumi, Ca' Foscari si propone di attuare delle azioni di sensibilizzazione del personale e degli studenti per promuovere un utilizzo piu' oculato dell'acqua.");
    $("#nomeValore").html("Acqua utilizzata: <b>" + String(valore) + " " + String(unita) + "</b>");
    
    $('#popup').show();
}

function cameraRifiuti(){
    camera('rifiuti');
    $('#popup').hide();
}

function clickRifiuti(){
    window.focused = "rifiutiCamera";
    
    var data = window.dataManager.data;
    var anno = $("#anni").val();
    
    var unita = data[anno]["Rifiuti"]["unity"];
    var valore = data[anno]["Rifiuti"]["values"][0];  
    
    $("#tipo").html("Obiettivo strategico: Tutelare l'ambiente e il territorio");
    $("#testo").html("In questa area rientrano le attivita' di riduzione dei rifiuti e di razionalizzare e riqualificazione del processo di raccolta differenziata. A queste si aggiungono il rispetto delle normative specifiche e le azioni di sensibilizzazione rivolta a chi studia e lavora in ateneo.");
    $("#nomeValore").html("Proporzione rifiuti differenziati: <b>" + String(valore) + String(unita) + "</b> dei rifiuti totali");

    $('#popup').show();
}

function cameraSupplyChain(){
    camera('supply_chain');
    $('#popup').hide();
}

function clickSupplyChain(){
    window.focused = "supplychainCamera";
    
    var data = window.dataManager.data;
    var anno = $("#anni").val();
    
    var unita = data[anno]["Supply Chain"]["unity"];
    var valore = data[anno]["Supply Chain"]["values"][0];  
    
    $("#tipo").html("Obiettivo strategico: Predisporre un sistema di Sustainable Public Procurement");
    $("#testo").html("In questa area sono raccolte tutte le azioni che riguardano la gestione degli acquisti e le relative attivita' logistiche. Ca' Foscari si sta impegnando a implementare gli acquisti verdi inserendo criteri di selezione sociali e ambientali, oltre a quelli economici e tecnici, per la scelta dei fornitori di beni e servizi.");
    $("#nomeValore").html("Proporzione fornitura ecosostenibile: <b>" + String(valore) + String(unita) + "</b> del totale");
    
    $('#popup').show();
}

function cameraMobilita(){
    camera('mobilita');
    $('#popup').hide();
}

function clickMobilita(){
    window.focused = "mobilitaCamera";    
    
    var data = window.dataManager.data;
    var anno = $("#anni").val();
    
    var unita = data[anno]["Mobilita"]["unity"];
    var valore = data[anno]["Mobilita"]["values"][0];  
    
    $("#tipo").html("Obiettivo strategico: Ridurre le emissioni di CO2");
    $("#testo").html("In questa area sono raccolte le azioni dell'Ateneo per favorire una mobilita' aziendale piu' sostenibile, che riduca le emissioni generate dagli spostamenti di personale e studenti.");
    $("#nomeValore").html("Proporzione utilizzo mezzi pubblici: <b>" + String(valore) + String(unita) + "</b> del totale");
    
    $('#popup').show();
}