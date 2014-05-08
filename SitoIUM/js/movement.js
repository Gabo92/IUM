function cameraHome(){
    camera('default');
    
    $('#popup').hide();
}

function cameraInnovazione(){
    camera('innovazione');
    
    var data = window.dataManager.data;
    var anno = $("#anni").val();
    
    var unita = data[anno]["Innovazione"]["unity"];
    var valore = data[anno]["Innovazione"]["values"][0];  
  
    $("#tipo").html("Obiettivo strategico: Investire nella ricerca sui temi");
    $("#testo").html("L'obiettivo e' da un lato quello di potenziare il supporto agli investimenti nella ricerca su questi temi, e dall'altro di valorizzare le competenze dei docenti dell'ateneo e dare maggiore visibilita' ai risultati dei progetti realizzati su tematiche sostenibili.");
    $("#nomeValore").html("Fondi innovazione: <b>" + String(valore) + String(unita) + "</b>");
    
    $('#popup').show();
}

function cameraGovernance(){
    camera('governance');
    
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
    
    var data = window.dataManager.data;
    var anno = $("#anni").val();
    
    var unita = data[anno]["Politiche Personale"]["unity"];
    var valore = data[anno]["Politiche Personale"]["values"][0];  
  
    $("#tipo").html("Obiettivi strategici: promuovere il benessere dei lavoratori e promuovere l'assunzione di responsabilita' del personale");
    $("#testo").html("In questa sezione vengono raccolte tutte le azioni dedicate al personale dell'ateneo, ovvero tecnici amministrativi e docenti. Sono quindi presenti le iniziative finalizzate alla realizzazione di interventi formativi e alla valorizzazione delle competenze personali, ma anche azioni per migliorare il benessere sul posto di lavoro, la salute, la sicurezza e anche le azioni di supporto alla famiglia del dipendente. Infine rientrano in quest'area tutti i progetti mirati a diffondere la cultura della sostenibilita' presso il personale.");
    $("#nomeValore").html("Proporzione ore di lavoro telematico: <b>" + String(valore) + String(unita) + "</b>" + "del lavoro totale");
    
    $('#popup').show();
}

function cameraPoliticheStudenti(){
    camera('pol_studenti');
    
    var data = window.dataManager.data;
    var anno = $("#anni").val();
    
    var unita = data[anno]["Politiche Studenti"]["unity"];
    var valore = data[anno]["Politiche Studenti"]["values"][0];  
  
    $("#tipo").html("Obiettivo strategico: promuovere la soddisfazione degli studenti");
    $("#testo").html("In quest'area vengono inserite le azioni che mirano ad aumentare il benessere degli studenti e a rendere la loro esperienza presso l'ateneo piu' soddisfacente e piu' proficua. Rientrano quindi le azioni per migliorare l'efficienza e l'efficacia dei servizi agli studenti, con particolare attenzione alle situazioni di difficolta'. Sono comprese in quest'area anche tutte le iniziative volte a promuovere la diffusione della cultura della sostenibilita' presso gli studenti.");
    $("#nomeValore").html("Voto medio degli studenti: <b>" + String(valore) + "</b>");
    
    $('#popup').show();
}

function cameraMateriali(){
    camera('materiali');
    
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
    
    $("#tipo").html("ciao");
    $("#testo").html("ciao");
    $("#nomeValore").html("ciao");
    
    $('#popup').show();
}

function cameraAcqua(){
    camera('acqua');
    
    $("#tipo").html("ciao");
    $("#testo").html("ciao");
    $("#nomeValore").html("ciao");
    
    $('#popup').show();
}

function cameraRifiuti(){
    camera('rifiuti');
    
    $("#tipo").html("ciao");
    $("#testo").html("ciao");
    $("#nomeValore").html("ciao");

    $('#popup').show();
}

function cameraSupplyChain(){
    camera('supply_chain');
    
    $("#tipo").html("ciao");
    $("#testo").html("ciao");
    $("#nomeValore").html("ciao");
    
    $('#popup').show();
}

function cameraMobilita(){
    camera('mobilita');
    
    $("#tipo").html("ciao");
    $("#testo").html("ciao");
    $("#nomeValore").html("ciao");
    
    $('#popup').show();
}