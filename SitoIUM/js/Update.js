	// UPDATE: Integrazione con SosLibrary
		
	// Variabili di Output
	
	var ValoreAnnuoGovernance=0;		// Variabile di output Governance
		var ValoreAnnuoGovernancePRS=0;
		var ValoreAnnuoGovernancePDS=0;
		var ValoreAnnuoGovernanceFCS=0;
	
	var ValoreAnnuoStudenti=0;		// Variabile di output Politiche Studenti
		
	var ValoreAnnuoPersonale=0;		// Variabile di output Personale
	
	var ValoreAnnuoSupplyChain=0;		// Variabile di output Supply Chain
	
	var ValoreAnnuoInnovazione=0;		// Variabile di output Innovazione
		
	var ValoreAnnuoMateriali=0;		// Variabile di output Materiali
					
	var ValoreAnnuoRifiuti=0;		// Variabile di output Rifiuti
		
	var ValoreAnnuoAcqua=0;			// Variabile di output Acqua
		
	var ValoreAnnuoMobilita=0;		// Variabile di output Mobilita
		
	var ValoreAnnuoEnergia=0;		// Variabile di output Energia
	
	// Array di Flags per ciascuna area: 
	// 0 - Il dato dell&acute;area corrisposta non &eacute; stato ancora reperito , 
	// 1 - Il dato &eacute; stato reperito ed inserito nella corrispettiva variabile
	var arrDataReady = new Array(0,0,0,0,0,0,0,0,0,0);
	
	// Gestore cronometro per il controllo dei Flag per ciascuna area
	var IntervalHandler;
	
	
	// Inizializza i dati secondo l&acute;anno inserito in YearSelected.
	// Una volta che tutti i dati sono stati reperiti (ovvero l&acute;array 
	// arrDataReady &eacute; impostato tutto ad 1)esegue la funzione specificata nel
	// parametro onDataRetrieved.
	// Parametri:
	// 		YearSelected - Anno di cui reperire i dati relative le dieci aree
	// 				di intervento
	// 		onDataRetrieved - Funzione da eseguire una volta recuperate le 
	//				variabili.
	function initializeData(YearSelected, onDataRetrieved) 
	{ 	
		var arrDataReady = new Array(0,0,0,0,0,0,0,0,0,0);
		IntervalHandler = setInterval(function () {checkDataStatus(onDataRetrieved)}, 1000);
						
		getRowsInTimeBetween("VotoPRS", 
							YearSelected +"-01-01", YearSelected + "-12-31",
							Gruppo, "DESC", 
							getGovernancePRS, onErrorGovernance); 
							// valore PRS e in cascata PDS e FCS
		
		getRowsInTimeBetween("VotoStudenti",
							YearSelected +"-01-01", YearSelected + "-12-31",
							Gruppo, "DESC", 
							getStudenti, onErrorStudenti);
		
		getRowsInTimeBetween("Orelavoro", 
							YearSelected +"-01-01", YearSelected + "-12-31",
							Gruppo, "DESC", 
							getPersonale, onErrorPersonale);
		
		getRowsInTimeBetween("DocumentiDigitali",
							YearSelected +"-01-01", YearSelected + "-12-31", 
							Gruppo, "DESC", 
							getMateriali, onErrorMateriali);
		
		getRowsInTimeBetween("RifiutiRiciclati",
							YearSelected +"-01-01", YearSelected + "-12-31",
							Gruppo, "DESC", 
							getRifiuti, onErrorRifiuti);
		
		getRowsInTimeBetween("FondiInnovazione",
							YearSelected +"-01-01", YearSelected + "-12-31",
							Gruppo, "DESC", 
							getInnovazione, onErrorInnovazione);
		
		/* 
		Le aree con pi&uacute; variabili nel corso di un anno necessitano di una
		media annuale.
		In questo caso usiamo un passaggio intermedio per contare le 
		variabili ed effettuare la somma            
		*/
		
		getRowsInTimeBetween("TrasportoSostenibile",
							YearSelected +"-01-01", YearSelected + "-12-31", 
							Gruppo, "DESC", 
							countMobilitaVars, onErrorMobilita);
		
		getRowsInTimeBetween("AcquaConsumata",
							YearSelected +"-01-01", YearSelected + "-12-31", 
							Gruppo, "DESC", 
							countAcquaVars, onErrorAcqua);
		
		getRowsInTimeBetween("EnergiaConsumata",
							YearSelected +"-01-01", YearSelected + "-12-31", 
							Gruppo, "DESC", 
							countEnergiaVars, onErrorEnergia);
					
	   getRowsInTimeBetween("RifornimentiEco",
	   						YearSelected +"-01-01", YearSelected + "-12-31",
							Gruppo, "DESC", 
							countSupplyChainVars, onErrorSupplyChain);
	
	}
	
	function onErrorGovernance() 
		{ alert("Errore reperimento dati Governance"); }
	function onErrorStudenti() 
		{ alert("Errore reperimento dati Studenti"); }
	function onErrorPersonale() 
		{ alert("Errore reperimento dati Personale"); }
	function onErrorMateriali() 
		{ alert("Errore reperimento dati Materiali"); }
	function onErrorRifiuti() 
		{ alert("Errore reperimento dati Rifiuti"); }
	function onErrorInnovazione() 
		{ alert("Errore reperimento dati Innovazione"); }
	function onErrorMobilita() 
		{ alert("Errore reperimento dati Mobilit&aacute;"); }
	function onErrorAcqua() 
		{ alert("Errore reperimento dati Acqua"); }
	function onErrorEnergia() 
		{ alert("Errore reperimento dati Energia"); }
	function onErrorSupplyChain() 
		{ alert("Errore reperimento dati Supply Chain"); }
	
	
	// ### Funzioni di istanziazione
				
	// Prende il valore PRS
	function getGovernancePRS(xml)
	{
		// Voto da 1 a 10: Media dei voti ricavati dai questionari in materia
		// di Ricerca di Sostenibilit&aacute;. 1 valore per anno
		ValoreAnnuoGovernancePRS = $(xml).find("Valore").text();

		// Prende il valore PDS
	   getRowsInTimeBetween("VotoPDS", 
	   					YearSelected +"-01-01", YearSelected + "-12-31",
						Gruppo, "DESC", 
						getGovernancePDS, onErrorGovernance);
	}
	
	// Prende il valore PDS
	function getGovernancePDS(xml)
	{
		ValoreAnnuoGovernancePDS = $(xml).find("Valore").text();
		
		// Prende il valore FCS, crea la media e esegue lo switch
		getRowsInTimeBetween("VotoFCS", 
						YearSelected +"-01-01", YearSelected + "-12-31", 
						Gruppo, "DESC", 
						getGovernanceFCS, onErrorGovernance);    
	}
	
	// Prende valore FCS e esegue la media dei 3 valori 
	function getGovernanceFCS(xml)
	{
		ValoreAnnuoGovernanceFCS = $(xml).find("Valore").text();
		getGovernance();
	}
	
	function getGovernance()
	{
		// Trasformazione da stringa ad intero dei parziali PRS, PDS, FCS 
		// per effettuare la media
		var tmpPRS=parseInt(ValoreAnnuoGovernancePRS,10);
		var tmpPDS=parseInt(ValoreAnnuoGovernancePDS,10);
		var tmpFCS=parseInt(ValoreAnnuoGovernanceFCS,10);
	
		// Calcolo del valore medio basato sui 3 valori PDS PRS FCS
		ValoreAnnuoGovernance=(tmpPRS+tmpPDS+tmpFCS)/3; 
	
		// Casistica di instanziazione.	
		
		if(ValoreAnnuoGovernance <= thrGovernance[0])
		{	
			// Scarso - Luce Rossa
			changeLightColor("Luci__spotGovernance", thrColors[2]);
		}
		else if (ValoreAnnuoGovernance <= thrGovernance[1])
		{	
			// Discreto - Luce Gialla
			changeLightColor("Luci__spotGovernance", thrColors[1]);
		}
		else if (ValoreAnnuoGovernance <= thrGovernance[2])
		{	
			// Ottimo - Luce Verde
			changeLightColor("Luci__spotGovernance", thrColors[0]);
		}
		
		// Il dato relativo alla Governance &eacute; pronto.
		arrDataReady[0] = 1;
	}
	
	function getStudenti(xml)
	{
		ValoreAnnuoStudenti = $(xml).find("Valore").text();
	
		// Arrotonda il valore
		ValoreAnnuoStudenti=rounding(ValoreAnnuoStudenti);	
		
		if(ValoreAnnuoStudenti <= thrStudenti[0])
		{	
			// Scarso - Luce Rossa
			changeLightColor("Luci__spotStudenti", thrColors[2]);
		}
		else if (ValoreAnnuoStudenti <= thrStudenti[1])
		{	
			// Discreto - Luce Giallo
			changeLightColor("Luci__spotStudenti", thrColors[1]);
		}
		else if (ValoreAnnuoStudenti <= thrStudenti[2])
		{	
			// Ottimo - Luce Verde
			changeLightColor("Luci__spotStudenti", thrColors[0]);
		}
		
		arrDataReady[1] = 1;
	
	}
	
	function getPersonale(xml)
	{
		ValoreAnnuoPersonale = $(xml).find("Valore").text();
		
		// Arrotonda il valore
		ValoreAnnuoPersonale=rounding(ValoreAnnuoPersonale);	
		
		if(ValoreAnnuoPersonale <= thrPersonale[0])
		{	
			// Scarso - Luce Rossa
			changeLightColor("Luci__spotPersonale", thrColors[2]);
		}
		else if (ValoreAnnuoPersonale <= thrPersonale[1])
		{	
			// Discreto - Luce Gialla
			changeLightColor("Luci__spotPersonale", thrColors[1]);
		}
		else if (ValoreAnnuoPersonale <= thrPersonale[2])
		{	
			// Ottimo - Luce Verde
			changeLightColor("Luci__spotPersonale", thrColors[0]);
		}
	
		arrDataReady[2] = 1;
	}
		
			
	function getSupplyChain(xml, VarCount)
	{
		// Percentuale di rifornimenti di tipo equosolidale. 
		// Media in un anno. Val 0-100%. Mensile
		var SupplyChainSum = $(xml).find("Somma").text();
		ValoreAnnuoSupplyChain = SupplyChainSum/VarCount;
	
		// Arrotonda valore
		ValoreAnnuoSupplyChain = rounding(ValoreAnnuoSupplyChain);
	
		if(ValoreAnnuoSupplyChain <= thrSupplyChain[0])
			{ 
				// Scarso - FoglieLiv3.jpg: Foglie Grigie
				changeTexture("SupplyChain__FoglieTex", "textures/FoglieLiv3.jpg"); 
			}
			else if (ValoreAnnuoSupplyChain <= thrSupplyChain[1])
			{  
				// Discreto - FoglieLiv2.jpg: Foglie Gialle
				changeTexture("SupplyChain__FoglieTex", "textures/FoglieLiv2.jpg"); 
			}
			else if (ValoreAnnuoSupplyChain <= thrSupplyChain[2])
			{ 
				// Ottimo - FoglieLiv1.jpg: Foglie Verdi
				changeTexture("SupplyChain__FoglieTex", "textures/FoglieLiv1.jpg"); 
			 }			
	
		arrDataReady[3] = 1;		
	}
	
				
	function countSupplyChainVars(xml)
	{
		var SupplyChainCount = 0;
	
		$(xml).find("Riga").each(function(){SupplyChainCount++;})
		
		// Effettuo la somma, chiamo getSupplyChain e invio il numero di 
		// registrazioni come parametro
		getSumInTimeBetween("RifornimentiEco", 
							YearSelected +"-01-01", YearSelected + "-12-31", 
							Gruppo, 
							getSupplyChain, onErrorSupplyChain,
							SupplyChainCount);
	
	}
	
	function getInnovazione(xml)
	{
	
	 	// Fondi finanziati per progetti aventi obiettivi ecosostenibili. 
		// Val 0-100%. Annuale
		ValoreAnnuoInnovazione = $(xml).find("Valore").text();
	
		// Arrotonda il valore
		ValoreAnnuoInnovazione=rounding(ValoreAnnuoInnovazione);
		
		if(ValoreAnnuoInnovazione <= thrInnovazione[0])
			{  
				// Scarso - Innovazione1.x3d: #1 Cannocchiale al centro
				loadResource("Innovazione1", "Innovazione/Innovazione1.x3d"); 
			}
			else if (ValoreAnnuoInnovazione <= thrInnovazione[1])
			{   
				// Discreto - Innovazione1.x3d e Innovazione2.x3d: 
				//					#2 Cannocchiali (centrale - destro)
				loadResource("Innovazione1", "Innovazione/Innovazione1.x3d");
				loadResource("Innovazione2", "Innovazione/Innovazione2.x3d"); 
			}
			else if (ValoreAnnuoInnovazione <= thrInnovazione[2])
			{	
				// Ottimo - Innovazione1.x3d, Innovazione2.x3d e Innovazione3.x3d: #3 Cannocchiali
				loadResource("Innovazione1", "Innovazione/Innovazione1.x3d");
				loadResource("Innovazione2", "Innovazione/Innovazione2.x3d"); 				
				loadResource("Innovazione3", "Innovazione/Innovazione3.x3d"); 
			}
							
		arrDataReady[4] = 1;
	}
	
	function getRifiuti(xml)
	{
	
	 // Fondi finanziati per progetti aventi obiettivi ecosostenibili. 
	 // Val 0-100%. Annuale
		ValoreAnnuoRifiuti = $(xml).find("Valore").text();
		
		// Arrotonda il valore
		ValoreAnnuoRifiuti=rounding(ValoreAnnuoRifiuti);
	
		if(ValoreAnnuoRifiuti <= thrRifiuti[0])
			{	
				// Scarso - #1 Cestino Verde
				changeMaterialColor("Rifiuti__RifiutiMatCentro", 
												"0.032 0.487 0.000");
				changeMaterialColor("Rifiuti__RifiutiMatDestra", 
												"0.800 0.800 0.800");
				changeMaterialColor("Rifiuti__RifiutiMatSinistra", 
												"0.800 0.800 0.800");
			}
			else if (ValoreAnnuoRifiuti <= thrRifiuti[1])
			{ 
				// Discreto - #2 Cestini Verdi (centrale - destro) 
				changeMaterialColor("Rifiuti__RifiutiMatCentro", 
												"0.032 0.487 0.000");
				changeMaterialColor("Rifiuti__RifiutiMatDestra", 
												"0.032 0.487 0.000");
				changeMaterialColor("Rifiuti__RifiutiMatSinistra",
												"0.800 0.800 0.800");
			}
			else if (ValoreAnnuoRifiuti <= thrRifiuti[2])
			{
				// Ottimo - #3 Cestini Verdi 
				changeMaterialColor("Rifiuti__RifiutiMatCentro", 
												"0.032 0.487 0.000");
				changeMaterialColor("Rifiuti__RifiutiMatDestra", 
												"0.032 0.487 0.000");
				changeMaterialColor("Rifiuti__RifiutiMatSinistra", 
												"0.032 0.487 0.000");
			}
		
		arrDataReady[5] = 1;											
	}
	
	function getMateriali(xml)
	{
	
	 // Fondi finanziati per progetti aventi obiettivi ecosostenibili. 
	 // Val 0-100%. Annuale
		ValoreAnnuoMateriali = $(xml).find("Valore").text();
	
		// Arrotonda il valore
		ValoreAnnuoMateriali=rounding(ValoreAnnuoMateriali);
		
		if(ValoreAnnuoMateriali <= thrMateriali[0])
			{ 
				// Scarso - Materiali1.x3d, Materiali2.x3d e Materiali3.x3d: #3 Fogli di carta
				loadResource("Materiali1", "Materiali/Materiali1.x3d");
				loadResource("Materiali2", "Materiali/Materiali2.x3d");
				loadResource("Materiali3", "Materiali/Materiali3.x3d");
			}
			else if (ValoreAnnuoMateriali <= thrMateriali[1])
			{	
				// Discreto - Materiali1.x3d e Materiali2.x3d: #2 Fogli di carta (centrale - destro)
				loadResource("Materiali1", "Materiali/Materiali1.x3d");
				loadResource("Materiali2", "Materiali/Materiali2.x3d");
			}
			else if (ValoreAnnuoMateriali <= thrMateriali[2])
			{
				// Ottimo - Materiali1.x3d: #1 Foglio al centro
				loadResource("Materiali1", "Materiali/Materiali1.x3d");
			}
			
						
		arrDataReady[6] = 1;
					
	}
	
	function getAcqua(xml, VarCount)
	{
		//Media in un anno. Val . Mensile
		var AcquaSum = $(xml).find("Somma").text();
		mediaVariabiliAcqua = AcquaSum/VarCount;
	
		// Arrotonda valore
		mediaVariabiliAcqua=mediaVariabiliAcqua/100;
		ValoreAnnuoAcqua=mediaVariabiliAcqua-(mediaVariabiliAcqua%0.001);
	
		if(ValoreAnnuoAcqua <= thrAcqua[0])
			{ 
				// Ottimo - Acqua3.x3d: Livello Acqua Basso
				loadResource("Acqua3", "Acqua/Acqua3.x3d"); 
			}
			else if (ValoreAnnuoAcqua <= thrAcqua[1])
			{ 	
				// Discreto - Acqua2.x3d: Livello Acqua Medio
				loadResource("Acqua2", "Acqua/Acqua2.x3d");
			}
			else 
			{ 	
				// Scarso - Acqua1.x3d: Livello Acqua Alto 	
				loadResource("Acqua1", "Acqua/Acqua1.x3d");
			}
	
		arrDataReady[7] = 1;
								
	}
	
	function countAcquaVars(xml)
	{
		var AcquaCount = 0;
		$(xml).find("Riga").each(function(){AcquaCount++;})

		// Effettuo la somma, chiamo getAcqua e invio il numero di 
		// registrazioni come parametro
		getSumInTimeBetween("AcquaConsumata",
						YearSelected +"-01-01", YearSelected + "-12-31", 
						Gruppo, 
						getAcqua, onErrorAcqua, 
						AcquaCount);
		
	}
	
	function getMobilita(xml, VarCount)
	{
		//Media in un anno. Val . Mensile
		var MobilitaSum = $(xml).find("Somma").text();
		mediaVariabiliMobilita = MobilitaSum/VarCount;
	
		// Arrotonda valore
		ValoreAnnuoMobilita = rounding(mediaVariabiliMobilita);
		
		if(ValoreAnnuoMobilita <= thrMobilita[0])
			{	
				// Scarso - Mobilita3.x3d: 
				// 				#3 persona su Gondola, #2 su Vaporetto
				loadResource("Mobilita3", "Mobilita/Mobilita3.x3d"); 
			}
		else if(ValoreAnnuoMobilita <= thrMobilita[1])
			{
				// Discreto - Mobilita2.x3d: 
				// 				#2 persona su Gondola, #3 su Vaporetto
				loadResource("Mobilita2", "Mobilita/Mobilita2.x3d"); 
			}
		else if (ValoreAnnuoMobilita <= thrMobilita[2])
			{ 
				// Ottimo - Mobilita1.x3d: 
				//				#1 persona su Gondola, #6 su Vaporetto
				loadResource("Mobilita1", "Mobilita/Mobilita1.x3d"); 
			}
					
		arrDataReady[8] = 1;
	
	}
	
	function countMobilitaVars(xml)
	{
		var MobilitaCount = 0;
		$(xml).find("Riga").each(function(){MobilitaCount++;})

		// Effettuo la somma, chiamo getMobilita e invio il numero di 
		// registrazioni come parametro
		getSumInTimeBetween("TrasportoSostenibile",
						YearSelected +"-01-01", YearSelected + "-12-31",
						Gruppo, 
						getMobilita, onErrorMobilita, 
						MobilitaCount);
		
		
	}
	
	
	function getEnergia(xml, VarCount)
	{
		//Media in un anno. Val . Mensile
		var EnergiaSum = $(xml).find("Somma").text();
		mediaVariabiliEnergia = EnergiaSum/VarCount;
		
		// Arrotonda valore
		ValoreAnnuoEnergia = rounding(mediaVariabiliEnergia);
	
		if(ValoreAnnuoEnergia <= thrEnergia[0])
			{ 	
				// Ottimo - Luce Verde, Rotazione Veloce
				changeLightColor("Luci__spotEnergia", thrColors[0]);
				changeCycleInterval("Energia__TimeSource", velocita[0]);
			}
			else if (ValoreAnnuoEnergia <= thrEnergia[1])
			{ 
				// Discreto - Luce Gialla, Rotazione Media
				changeLightColor("Luci__spotEnergia", thrColors[1]);
				changeCycleInterval("Energia__TimeSource", velocita[1]);
			}
			else 
			{	
				// Scarso - Luce Rossa, Rotazione Lenta
				changeLightColor("Luci__spotEnergia", thrColors[2]);
				changeCycleInterval("Energia__TimeSource", velocita[2]);
			}
				
				
		arrDataReady[9] = 1;
	}
			
	
	function countEnergiaVars(xml)
	{
		var EnergiaCount = 0;
		$(xml).find("Riga").each(function(){EnergiaCount++;})

		// Effettuo la somma, chiamo getEnergia e invio il numero di 
		// registrazioni come parametro
		getSumInTimeBetween("EnergiaConsumata",
							YearSelected +"-01-01", YearSelected + "-12-31",
							Gruppo, 
							getEnergia, onErrorEnergia, 
							EnergiaCount);
		
	}
	
	
	// Funzione di controllo dei flag delle aree di intervento (arrDataReady)
	// Quando tutti i flag sono a 1 viene 	
	function checkDataStatus(func)
	{
	var ready=1;
	
	for (var i=0; i<9; i++)
	{ if(arrDataReady[i] == 0) ready=0; }
	
	if(ready==1)
	{ 	
		// Viene terminato il controllo dei flag
		clearInterval(IntervalHandler);
		
		// Se specificata, viene eseguita una funzione una volta che tutti 
		// i dati sono pronti
		if(func != null) func();
	}	
	}
