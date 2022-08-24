"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
		return queryInterface.bulkInsert(
			"medicine_inventories",
			[
				{
					type: "misc",
					name: "Paper Tape",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Fixer",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Folic Acid",
					updatedAt: "2023/02/01",
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Calamox 1.2 Gm",
					updatedAt: "2022/08/01",
					createdAt: new Date()
				},
				{
					type: "OINT",
					name: "Olygin Vaginal",
					updatedAt: "2023/03/01",
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Omeprazole",
					updatedAt: "2022/10/01",
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Ventoline 2 MG (Zaftolin)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "CAP",
					name: "Doxy 100 Mg",
					updatedAt: "2023/02/01",
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Ceftrixone 500 Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "SYP",
					name: "Cough 120 Ml",
					updatedAt: "2022/10/01",
					createdAt: new Date()
				},
				{
					type: "",
					name: "D/Syringe 10 Cc",
					updatedAt: "2025/07/01",
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Lignocain",
					updatedAt: "2023/01/01",
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Gravinate",
					updatedAt: "2022/10/01",
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Dulcolux",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Nilstat Drop",
					updatedAt: "2022/10/01",
					createdAt: new Date()
				},
				{
					type: "SYP",
					name: "Gravinate",
					updatedAt: "2022/03/01",
					createdAt: new Date()
				},
				{
					type: "CAP",
					name: "Sangobion",
					updatedAt: "2022/12/01",
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Multibionta",
					updatedAt: "2022/08/01",
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Neurobion",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Cotton Roll",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "SYP",
					name: "Citralka",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "SYP",
					name: "Panadol Children Drop",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "OINT",
					name: "Neomycin Skin",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Hydrocortisone 250Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Pyodine Solution",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Gauz Than",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Sanitery Pad",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Synthocinon",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Qalsan D",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Yellow Tip",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Blue Tip",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Cord Clamp",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Silk (All Sizes)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Chromic (All Sizes)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Cac 1000",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Propax (Combine Dressing) 10/20",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Propax (Combine Dressing) 10/10",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Screen 12*15",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Screen 10*12",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Screen 8*10",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Weight Machine (Children)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Weight Machine (Adult)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Ecg Roll",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Male Cap",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "I-V Stopper",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "N-G Tube (All Sizes)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Suction Tube",
					updatedAt: "2024/03/01",
					createdAt: new Date()
				},
				{
					type: "",
					name: "Surgical Blade (All Sizes)",
					updatedAt: "2021/11/01",
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Dormicum",
					updatedAt: "2023/10/01",
					createdAt: new Date()
				},
				{
					type: "",
					name: "Halothane",
					updatedAt: "2022/12/01",
					createdAt: new Date()
				},
				{
					type: "",
					name: "Transperent Tape",
					updatedAt: new Date,
					createdAt: new Date()
				},
				{
					type: "",
					name: "Cotton Bandage 2 Inch",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Cotton Bandage 4 Inch",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Cotton Bandage 6 Inch",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Crape Bandage 4 Inch",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Crape Bandage 6 Inch",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Develper",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "X-Ra Film 12*15",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "X-Ra Film 10*12",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Chlorine",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Zaftoline Solution",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Septran Ds",
					updatedAt: "2024/02/01",
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Gravinate",
					updatedAt: "2023/10/01",
					createdAt: new Date()
				},
				{
					type: "CAP",
					name: "Zauxit",
					updatedAt: "2022/01/01",
					createdAt: new Date()
				},
				{
					type: "",
					name: "Oxygen Mask (All Size)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Nabulize Mask (Adult)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Nabulize Mask (Children)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Female Cap",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "U/Sound Printer Roll",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Ett Tube (All Sizes)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Auto Clave Tape",
					updatedAt: "2024/01/01",
					createdAt: new Date()
				},
				{
					type: "",
					name: "Disposable Airways",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Diathermy Lead ",
					updatedAt: "2023/05/01",
					createdAt: new Date()
				},
				{
					type: "",
					name: "D/Syringe 5cc",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "I-V Chamber",
					updatedAt: "2022/08/01",
					createdAt: new Date()
				},
				{
					type: "",
					name: "Bp Appratus (Murcery)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Gentamycin 40 Mg",
					updatedAt: "2023/01/01",
					createdAt: new Date()
				},
				{
					type: "",
					name: "Clenil Aerosol",
					updatedAt: "2022/07/01",
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Albendazol",
					updatedAt: "2024/01/01",
					createdAt: new Date()
				},
				{
					type: "",
					name: "Atenolol 100 Mg",
					updatedAt: "2025/02/01",
					createdAt: new Date()
				},
				{
					type: "",
					name: "Zafnol 50 Mg",
					updatedAt: "2025/02/01",
					createdAt: new Date()
				},
				{
					type: "",
					name: "Xynosine Nasal Spray",
					updatedAt: "2025/02/01",
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Amrovil",
					updatedAt: "2022/10/01",
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Zyloric 100 Mg",
					updatedAt: "2025/04/01",
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Zyloric 300 Mg",
					updatedAt: "2025/02/01",
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Rencobal-F",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Teril 200 Mg",
					updatedAt: "2023/03/01",
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Azythromycin 500Mg",
					updatedAt: "2022/01/01",
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Kinz",
					updatedAt: "2022/06/01",
					createdAt: new Date()
				},
				{
					type: "",
					name: "R/Lactate 500 Ml",
					updatedAt: "2023/09/01",
					createdAt: new Date()
				},
				{
					type: "",
					name: "Bulb Holder (Pin)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Bulb Holder (Ring)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Swich",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Socket",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Capacitor (Elc)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Energy Saver 13/15 Watt",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Fan Dimmer",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Light Plug Board",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "Tab",
					name: "Dexamethasone ",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "Tab",
					name: "Loratidine 10 Mg",
					updatedAt: "2024/09/01",
					createdAt: new Date()
				},
				{
					type: "Tab",
					name: "Losartan Potassium",
					updatedAt: "2024/05/01",
					createdAt: new Date()
				},
				{
					type: "Tab",
					name: "Dyclo",
					updatedAt: "2024/04/01",
					createdAt: new Date()
				},
				{
					type: "Syp",
					name: "Amoxil 250 Mg",
					updatedAt: "2023/05/01",
					createdAt: new Date()
				},
				{
					type: "Syp",
					name: "Salbutamol",
					updatedAt: "2023/04/01",
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Lasix 20 Mg",
					updatedAt: new Date,
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Phenramine Melate",
					updatedAt: "2022/10/01",
					createdAt: new Date()
				},
				{
					type: "Inj",
					name: "Gravinate 50Mg",
					updatedAt: "2022/10/01",
					createdAt: new Date()
				},
				{
					type: "Cap",
					name: "Cefixime ",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "Tab",
					name: "Azythromycin 250 Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "Tab",
					name: "Flagyl 200 Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "Tab",
					name: "Flagyl 400 Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "Tab",
					name: "Augmentin 625 Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "Cap",
					name: "Omeprazle 20 Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Domel",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Cassete 8*10",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Cassete 10*12",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Cassete 12*15",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Oxygen Flow Metre",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Bracket Fan",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Plastic drum",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Kichen Grocery Stand",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Basket",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "OINT",
					name: "Hydrocortisone Cream",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Cefixime ",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "CAP",
					name: "Omeprazole 20 MG",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "CAP",
					name: "Omeprazole 40 MG",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Dyclo 50 Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Cetrizine 10 MG",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Azithromycin 250Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "No-Spa 40 Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "ORS",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Flagyl 200 Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Flagyl 400 Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Augmentin 625Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "SYP ",
					name: "Brufen ",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "SYP ",
					name: "Domel",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "SYP ",
					name: "Britanyl",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "SYP ",
					name: "Flagyl",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "SYP ",
					name: "Antacid",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "SYP ",
					name: "Zincat",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "SYP ",
					name: "Cefixime 100 Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "SYP ",
					name: "Cefixime 200 Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "SYP ",
					name: "Panadol",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Surgical Gloves (Latex)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Xylocaine  2% Solution",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Dormicum",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Gauze Pad",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "I-V Drip Set",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Insulin 70/30",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Sterlization Pouches",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Medicaine",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Surgical Gloves (Latex)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Films",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Sealing Tips.",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "High Speed Hand Piece",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Sodium Hypochloride",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "K-Files (15-40)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Root Canal Lubricant",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Zinc Oxide Eugenol",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Mirror Heads",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "GP Points",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Calcium Hydro Oxide",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "G & C (Japan)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Cavite",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Topical Xylocaine",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Burs",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Plungers",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Bone File",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Root Canal",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Wooden Wedge",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Slow Speed Hand Piece",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "D/Syringe 5cc",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Spinal Needle 25G",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Abocaine Spinal",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Proline 2/0",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Imatate",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Dyclo ",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Relispa",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Bath Soap",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Wiper Iron",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Hand Wash",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Boll Point (Blue)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Register (600 Pages)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Register (1500 Pages)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Bad Sheets",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "SYP ",
					name: "CPM",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Drotavarine",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Paracetamol",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "3-Ways Stopper",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "I-V Canula Size 20",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "I-V Canula Size 22",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "I-V Canula Size 24",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Brufen 400Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Paracetamol",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Metronidazole Inf 100 Ml",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Proline 2/0",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "ORS",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Carbolic Acid",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Gauze Than 50 Metres",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Disposable Gloves",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Dish Wash Sol (Lemon Max)",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Hydro Choleric",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Power Plug ",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Curcuit Breaker 20 Amps.",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Curcuit Breaker 100 Amps.",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Office Chair Iron",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Nebulizer Machine",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Office File Cover",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Surgical Gloves no 6.5/7/7.5",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Kleen Enema",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "DisposableFace Mask",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Propofol",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Aminophyline",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Vickryl No-01",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "DROP",
					name: "Soda Glycrine Ear",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Transamin 500Mg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Gauze Double Roti",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Formalin",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "SYP ",
					name: "Ammonium Chloride",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "OINT",
					name: "Hydrocortisone 10Gm",
					updatedAt: "2026/09/01",
					createdAt: new Date()
				},
				{
					type: "SYP",
					name: "Salbutamol 60ML",
					updatedAt: "2023/04/01",
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Losartan Pot.",
					updatedAt: "2024/05/01",
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Fefan",
					updatedAt: "2024/09/01",
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Danzen DS",
					updatedAt: "2025/07/01",
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Imitate",
					updatedAt: "2024/05/01",
					createdAt: new Date()
				},
				{
					type: "SYP",
					name: "Dimenhydrinate 60Ml",
					updatedAt: "2025/01/01",
					createdAt: new Date()
				},
				{
					type: "SYP",
					name: "Mertronidazole 90Ml",
					updatedAt: "2024/01/01",
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Amkay 100 Mg",
					updatedAt: "2025/01/01",
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Omezol 40Mg With Water",
					updatedAt: "2024/01/01",
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Fortazim 1000 Mg (With Water)",
					updatedAt: "2025/01/01",
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Bofalgan 100 Ml Infusion",
					updatedAt: "2024/01/01",
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Calamox 1.2Gm (With Water)",
					updatedAt: "2024/01/01",
					createdAt: new Date()
				},
				{
					type: "INJ",
					name: "Flazol (Metronidazole)500Mg/100Ml",
					updatedAt: "2024/01/01",
					createdAt: new Date()
				},
				{
					type: "",
					name: "Dental X-Ray Film ",
					updatedAt: "2023/09/01",
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Montilukast 10Mg",
					updatedAt: "2024/02/01",
					createdAt: new Date()
				},
				{
					type: "TAB",
					name: "Moxifloxacin 400 Mg",
					updatedAt: "2024/02/01",
					createdAt: new Date()
				},
				{
					type: "",
					name: "HBSAg",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "H-Pylori",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "HCV",
					updatedAt: new Date(),
					createdAt: new Date()
				},
				{
					type: "",
					name: "Cotton Roll",
					updatedAt: new Date(),
					createdAt: new Date()
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      
    */
		return queryInterface.dropTable("mail_recipients");
	}
};
