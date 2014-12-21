var _ = require('underscore');

// var products = [
//     {
//         id:1,
//         isbn13IGNORE: '9781118452130',
//         title: 'Exploring the Great Beyond',
//         author: 'Bob Jones',
//         category: 'Higher Education',
//         codes: [
//             '1CODEExploringTheGreatBeyond',
//             '2CODEExploringTheGreatBeyond',
//             '3CODEExploringTheGreatBeyond',
//             '4CODEExploringTheGreatBeyond',
//             '5CODEExploringTheGreatBeyond',
//             '6CODEExploringTheGreatBeyond',
//             '7CODEExploringTheGreatBeyond',
//             '8CODEExploringTheGreatBeyond',
//             '9CODEExploringTheGreatBeyond',
//             '10CODEExploringTheGreatBeyond',
//             '11CODEExploringTheGreatBeyond'
//         ]
//     },
//     {
//         id:2,
//         isbn13IGNORE: '9780470290792',
//         title: 'Human JavaScript' ,
//         author: 'Gordon B',
//         category: 'Professional Development',
//         codes: [
//             '1CODEHumanJavaScript',
//             '2CODEHumanJavaScript',
//             '3CODEHumanJavaScript',
//             '4CODEHumanJavaScript',
//             '5CODEHumanJavaScript',
//             '6CODEHumanJavaScript',
//             '7CODEHumanJavaScript',
//             '8CODEHumanJavaScript',
//             '9CODEHumanJavaScript',
//             '10CODEHumanJavaScript',
//             '11CODEHumanJavaScript'
//         ]
//     },
//     {
//         id:3,
//         isbn13IGNORE: '9780471692731',
//         title: 'Anatomy and Physiology',
//         author: 'Chrys C',
//         category: 'Trade',
//         codes: [
//             '1CODEAnatomyAndPhysiology',
//             '2CODEAnatomyAndPhysiology',
//             '3CODEAnatomyAndPhysiology',
//             '4CODEAnatomyAndPhysiology',
//             '5CODEAnatomyAndPhysiology',
//             '6CODEAnatomyAndPhysiology',
//             '7CODEAnatomyAndPhysiology',
//             '8CODEAnatomyAndPhysiology',
//             '9CODEAnatomyAndPhysiology',
//             '10CODEAnatomyAndPhysiology',
//             '11CODEAnatomyAndPhysiology'
//         ]
//     },
//     {
//         id:4,
//         isbn13IGNORE: '9781118743210',
//         title: 'Infinite Jest',
//         author: 'David Foster Wallace',
//         category: 'Higher Education',
//         codes: [
//             '1CODEInfiniteJest',
//             '2CODEInfiniteJest',
//             '3CODEInfiniteJest',
//             '4CODEInfiniteJest',
//             '5CODEInfiniteJest',
//             '6CODEInfiniteJest',
//             '7CODEInfiniteJest',
//             '8CODEInfiniteJest',
//             '9CODEInfiniteJest',
//             '10CODEInfiniteJest',
//             '11CODEInfiniteJest'
//         ]
//     },
//     {
//         id:5,
//         isbn13IGNORE: '9787879254203',
//         title: '70-687 Configuring Windows 8.1',
//         author: 'Joe Schmoe',
//         category: 'Professional Development',
//         codes: [
//             '1CODEConfigureingWindows',
//             '2CODEConfigureingWindows',
//             '3CODEConfigureingWindows',
//             '4CODEConfigureingWindows',
//             '5CODEConfigureingWindows',
//             '6CODEConfigureingWindows',
//             '7CODEConfigureingWindows',
//             '8CODEConfigureingWindows',
//             '9CODEConfigureingWindows',
//             '10CODEConfigureingWindows',
//             '11CODEConfigureingWindows'
//         ]
//     },
//     {
//         id:6,
//         isbn13IGNORE: '9780780549120',
//         title: 'Lord of the Rings',
//         author: 'J.R. Tolkein',
//         category: 'Trade',
//         codes: [
//             '1CODELordOfTheRings',
//             '2CODELordOfTheRings',
//             '3CODELordOfTheRings',
//             '4CODELordOfTheRings',
//             '5CODELordOfTheRings',
//             '6CODELordOfTheRings',
//             '7CODELordOfTheRings',
//             '8CODELordOfTheRings',
//             '9CODELordOfTheRings',
//             '10CODELordOfTheRings',
//             '11CODELordOfTheRings'
//         ]
//     }
// ];


    var products = [
        {
            id: 1,
            title: 'ElementaryDifferentialEquationsInternational9th',
            isbn13: '9780470398739',
            config: 'HIGHERED'
        },
        {
            id: 2,
            title: 'PersonnagesAnIntermediateCourseFrenchLanguageFrancophoneCulture4thEd',
            isbn13: '9780470432167',
            config: 'HIGHERED'
        },
        {
            id: 3,
            title: 'IntroductionFiniteElementAnalysisDesign',
            isbn13: '9780470125397',
            config: 'HIGHERED'
        },
        {
            id: 4,
            title: 'DifferentialEquationsBoundaryValueProblems',
            isbn13: '9780470418505',
            config: 'HIGHERED'
        },
        {
            id: 5,
            title: 'ContemporaryBusinessInternational13Ed',
            isbn13: '9780470445594',
            config: 'HIGHERED'
        },
        {
            id: 6,
            title: 'FundamentalsFluidMechanicsInternational6Ed',
            isbn13: '9780470398814',
            config: 'HIGHERED'
        },
        {
            id: 7,
            title: 'InformationTechnologyManagementTransformingOrganizationsDigitalEconomy6Ed',
            isbn13: '9780471787129',
            config: 'HIGHERED'
        },
        {
            id: 8,
            title: 'LossModels From Data to Decisions 3E',
            isbn13: '9780470187814',
            config: 'HIGHERED'
        },
        {
            id: 9,
            title: 'GlobalMarketingManagement5thEdInternationalStudentVersion',
            isbn13: '9780470505748',
            config: 'HIGHERED'
        },
        {
            id: 10,
            title: 'Lab Manual AP 4th',
            isbn13: '9780470917534',
            config: 'HIGHERED'
        },
        {
            id: 11,
            title: 'MOAC70688 LabsOnlineRegCode',
            config: 'HIGHERED'
        },
        {
            id: 12,
            title: 'FundamentalsofBuildingConstructionMaterialsMethods6thEdition',
            isbn13: '9781118138915',
            config: 'HIGHERED'
        },
        {
            id: 13,
            title: 'ParliamoitalianoACommunicativeApproach4thEdition',
            isbn13: '9780470526774',
            config: 'HIGHERED'
        },
        {
            id: 14,
            title: 'GovernmentNotForProfitAccountingConceptsPractices6thEdition',
            isbn13: '9781118155974',
            config: 'HIGHERED'
        },
        {
            id: 15,
            title: 'RealAnatomy2 WebVersion',
            isbn13: '9781118516720',
            config: 'HIGHERED'
        },
        {
            id: 16,
            title: 'MOAC70432 LabsOnlineRegCode',
            config: 'HIGHERED'
        },
        {
            id: 17,
            title: 'MOAC70236 Labs Online Reg Code',
            isbn13: '9780470874851',
            config: 'HIGHERED'
        },
        {
            id: 18,
            title: 'MOAC70410 LabsOnline R2',
            isbn13: '9781118966112',
            config: 'HIGHERED'
        },
        {
            id: 19,
            title: 'BeginningSpanish1stEdition',
            isbn13: '9780471727767',
            config: 'HIGHERED'
        },
        {
            id: 20,
            title: 'AccountingPrinciplesPeachtreeCompleteAccountingWorkbook9thEdition',
            isbn13: '9780470386675',
            config: 'HIGHERED'
        },
        {
            id: 21,
            title: 'FinancialRiskManagerHandbookSixthEdition',
            isbn13: '9780470904015',
            config: 'HIGHERED'
        },
        {
            id: 22,
            title: 'ABriefIntroductionToFluidMechanics5thEdition',
            isbn13: '9780470596791',
            config: 'HIGHERED'
        },
        {
            id: 23,
            title: 'AccountingPrinciplesPeachtreeCompleteAccountingWorkbook9thEd',
            isbn13: '9780470386675',
            config: 'HIGHERED'
        },
        {
            id: 24,
            title: 'EnvironmentalScienceEarthasaLivingPlanet8thEdition',
            isbn13: '9780470520338',
            config: 'HIGHERED'
        },
        {
            id: 25,
            title: 'eCollege WileyPLUS',
            config: 'HIGHERED'
        },
        {
            id: 26,
            title: 'WileyPLUS v5',
            config: 'HIGHERED'
        },
        {
            id: 27,
            title: 'LossModels From Data to Decisions 3E Online',
            isbn13: '9780470300275',
            config: 'HIGHERED'
        },
        {
            id: 28,
            title: 'MaterialsScienceandEngineeringAnIntroduction8thEdition',
            isbn13: '9780470419977',
            config: 'HIGHERED'
        },
        {
            id: 29,
            title: 'ContemporaryBusiness13thEdition2010Update',
            isbn13: '9780470496749',
            config: 'HIGHERED'
        },
        {
            id: 30,
            title: 'DichoenvivoBeginningSpanishwithPersonalNativeSpeakerCoaching',
            isbn13: '9781118171219',
            config: 'HIGHERED'
        },
        {
            id: 31,
            title: 'DichoyhechoBeginningSpanish9thEdition',
            isbn13: '9780470880609',
            config: 'HIGHERED'
        },
        {
            id: 32,
            title: 'ProfessionalCooking7eCanadianEdition',
            isbn13: '9780470197547',
            config: 'HIGHERED'
        },
        {
            id: 33,
            title: 'WileyResourceKits',
            config: 'HIGHERED'
        },
        {
            id: 34,
            title: 'MechanicsofMaterials3e',
            isbn13: '9780470481813',
            config: 'HIGHERED'
        },
        {
            id: 35,
            title: 'ProfessionalBaking6e',
            isbn13: '9781112023741',
            config: 'HIGHERED'
        },
        {
            id: 36,
            title: 'InteractionsExploringtheFunctionsoftheHumanBodyDVD',
            isbn13: '9780470276617',
            config: 'HIGHERED'
        },
        {
            id: 37,
            title: 'MarketingResearchEssentials8thEdition',
            isbn13: '9781118249321',
            config: 'HIGHERED'
        },
        {
            id: 38,
            title: 'FundamentalsofModernManufacturingMaterialsProcessesandSystems5thEdition',
            isbn13: '9781118231463',
            config: 'HIGHERED'
        },
        {
            id: 39,
            title: 'iProfile3',
            isbn13: '9781118176856',
            config: 'HIGHERED'
        },
        {
            id: 40,
            title: 'ExploringManagement3rdEdition',
            isbn13: '9780470878217',
            config: 'HIGHERED'
        },
        {
            id: 41,
            title: 'MOAC70646 LabsOnlineRegCode',
            config: 'HIGHERED'
        },
        {
            id: 42,
            title: 'ContemporaryBusiness2012Update14e',
            isbn13: '9781118010303',
            config: 'HIGHERED'
        },
        {
            id: 43,
            title: 'iProfile3 Canadian',
            isbn13: '9780470676349',
            config: 'HIGHERED'
        },
        {
            id: 44,
            title: 'ProfessionalCooking7th',
            isbn13: '9780470197523',
            config: 'HIGHERED'
        },
        {
            id: 45,
            title: 'DeGarmosMaterialsProcessesManufacturing11th',
            isbn13: '9780470924679',
            config: 'HIGHERED'
        },
        {
            id: 46,
            title: 'SS13MATHDEMO',
            config: 'HIGHERED'
        },
        {
            id: 47,
            title: 'GRANT FOUNDATIONS OF STRATEGY',
            isbn13: '9780470971277',
            config: 'HIGHERED'
        },
        {
            id: 48,
            title: 'SEKARAN RESEARCH METHODS',
            isbn13: '9781119942252',
            config: 'HIGHERED'
        },
        {
            id: 49,
            title: 'COMER PSYCHOLOGY',
            isbn13: '9781119941262',
            config: 'HIGHERED'
        },
        {
            id: 50,
            title: 'MOAC70687 Win81 R2 LabsOnline',
            isbn13: '9781118882757',
            config: 'HIGHERED'
        },
        {
            id: 51,
            title: 'LinguaMeeting 6Session',
            isbn13: '9781118946619',
            config: 'HIGHERED'
        },
        {
            id: 52,
            title: 'eBook ASVAB FDPremierPlus',
            isbn13: '9781118525500',
            config: 'HIGHERED'
        },
        {
            id: 53,
            title: 'MOAC70410 LabsOnlineRegCode',
            config: 'HIGHERED'
        },
        {
            id: 54,
            title: 'MOAC70411 LabsOnlineRegCode',
            config: 'HIGHERED'
        },
        {
            id: 55,
            title: 'Quantum',
            config: 'HIGHERED'
        },
        {
            id: 56,
            title: 'LinguaMeeting 12Session',
            isbn13: '9781118946626',
            config: 'HIGHERED'
        },
        {
            id: 57,
            title: 'LinguaMeeting En vivo universal',
            isbn13: '9781118986271',
            config: 'HIGHERED'
        },
        {
            id: 58,
            title: 'CEC ProfessionalGardeManger',
            config: 'HIGHERED'
        },
        {
            id: 59,
            title: 'Contemporary Business 15thED',
            isbn13: '9781118291986',
            config: 'HIGHERED'
        },
        {
            id: 60,
            title: 'WileyPLUS Version 4',
            config: 'HIGHERED'
        },
        {
            id: 61,
            title: 'AnatomyandPhysiologyFromSciencetoLife2ndEdition ISV',
            isbn13: '9780470448724',
            config: 'HIGHERED'
        },
        {
            id: 62,
            title: 'ContemporaryBusiness14th',
            isbn13: '9780470531297',
            config: 'HIGHERED'
        },
        {
            id: 63,
            title: 'MOAC70640 LabsOnlineRegCode',
            config: 'HIGHERED'
        },
        {
            id: 64,
            title: 'MOAC70642 LabsOnlineRegCode',
            config: 'HIGHERED'
        },
        {
            id: 65,
            title: 'MOAC70643 LabsOnlineRegCode',
            config: 'HIGHERED'
        },
        {
            id: 66,
            title: 'MOAC70647 LabsOnlineRegCode',
            config: 'HIGHERED'
        },
        {
            id: 67,
            title: 'MOAC70680 LabsOnlineRegCode',
            config: 'HIGHERED'
        },
        {
            id: 68,
            title: 'MOAC70685 LabsOnlineRegCode',
            config: 'HIGHERED'
        },
        {
            id: 69,
            title: 'MOAC70687 LabsOnlineRegCode',
            config: 'HIGHERED'
        },
        {
            id: 70,
            title: 'MOAC70412 LabsOnlineRegCode',
            config: 'HIGHERED'
        },
        {
            id: 71,
            title: 'PowerPhys2',
            isbn13: '9780470138021',
            config: 'HIGHERED'
        },
        {
            id: 72,
            title: 'CEC ProfessionalBaking6e',
            config: 'HIGHERED'
        },
        {
            id: 73,
            title: 'CEC ProfessionalCooking7e',
            config: 'HIGHERED'
        },
        {
            id: 74,
            title: 'CEC ProfessionalCooking8e',
            config: 'HIGHERED'
        },
        {
            id: 75,
            title: 'FARSOnline',
            config: 'HIGHERED'
        },
        {
            id: 76,
            title: 'CONTEMPORARY STRATEGY ANALYSIS TEXT AND CASES',
            isbn13: '9781119941897',
            config: 'HIGHERED'
        },
        {
            id: 77,
            title: 'WebCT',
            config: 'HIGHERED'
        },
        {
            id: 78,
            title: 'CONTEMPORARY STRATEGY ANALYSIS',
            isbn13: '9781119941880',
            config: 'HIGHERED'
        },
        {
            id: 79,
            title: 'ABriefIntroductionFluidMechanics4th',
            isbn13: '9780470039625',
            config: 'HIGHERED'
        },
        {
            id: 80,
            title: 'AccountingToolsBusinessDecisionMaking2nd',
            isbn13: '9780470087442',
            config: 'HIGHERED'
        },
        {
            id: 81,
            title: 'AnatomyPhysiologyScienceLife',
            isbn13: '9780471613183',
            config: 'HIGHERED'
        },
        {
            id: 82,
            title: 'AnatomyPhysiologyScienceLife2nd',
            isbn13: '9780470227589',
            config: 'HIGHERED'
        },
        {
            id: 83,
            title: 'AppliedStatisticsProbability4th',
            isbn13: '9780471745891',
            config: 'HIGHERED'
        },
        {
            id: 84,
            title: 'AppliedElectromagneticsEarlyTransmission',
            isbn13: '9780470042571',
            config: 'HIGHERED'
        },
        {
            id: 85,
            title: 'BusinessDataCommunications8th',
            isbn13: '9780471348078',
            config: 'HIGHERED'
        },
        {
            id: 86,
            title: 'BusinessStatistics5th',
            isbn13: '9780471789567',
            config: 'HIGHERED'
        },
        {
            id: 87,
            title: 'CellMolecularBiology4th',
            isbn13: '9780471465805',
            config: 'HIGHERED'
        },
        {
            id: 88,
            title: 'CellMolecularBiology5th',
            isbn13: '9780470042175',
            config: 'HIGHERED'
        },
        {
            id: 89,
            title: 'ConceptsBiochemistry3rd',
            isbn13: '9780471661795',
            config: 'HIGHERED'
        },
        {
            id: 90,
            title: 'DifferentialEquations1st',
            isbn13: '9780471651413',
            config: 'HIGHERED'
        },
        {
            id: 91,
            title: 'DynamicsAnalysisDesign',
            isbn13: '9780471401988',
            config: 'HIGHERED'
        },
        {
            id: 92,
            title: 'ElementaryDifferential7th',
            isbn13: '0471307890',
            config: 'HIGHERED'
        },
        {
            id: 93,
            title: 'ElementaryDifferentialEquations',
            isbn13: '9780471307891',
            config: 'HIGHERED'
        },
        {
            id: 94,
            title: 'ElementaryDifferentialEquations9th',
            isbn13: '9780470039403',
            config: 'HIGHERED'
        },
        {
            id: 95,
            title: 'ElementaryDifferentialEquationsBoundaryValue9th',
            isbn13: '9780470383346',
            config: 'HIGHERED'
        },
        {
            id: 96,
            title: 'EngineeringMechanicsStatics6th',
            isbn13: '9780471739326',
            config: 'HIGHERED'
        },
        {
            id: 97,
            title: 'EntrepreneurialFinance2nd',
            isbn13: '9780471230724',
            config: 'HIGHERED'
        },
        {
            id: 98,
            title: 'FinancialAccountingValuationEmphasis',
            isbn13: '9780471203599',
            config: 'HIGHERED'
        },
        {
            id: 99,
            title: 'FundamentalsMachineComponent',
            isbn13: '0471661775',
            config: 'HIGHERED'
        },
        {
            id: 100,
            title: 'FundamentalsMaterialsScience3rd',
            isbn13: '9780470125373',
            config: 'HIGHERED'
        },
        {
            id: 101,
            title: 'FundamentalsThermodynamics6th',
            isbn13: '9780471152323',
            config: 'HIGHERED'
        },
        {
            id: 102,
            title: 'FundamentalsThermodynamics7th',
            isbn13: '9780470041925',
            config: 'HIGHERED'
        },
        {
            id: 103,
            title: 'FundamentalsofEngineering',
            isbn13: '9780471787358',
            config: 'HIGHERED'
        },
        {
            id: 104,
            title: 'FundamentalsFluidMechanics5th',
            isbn13: '9780471675822',
            config: 'HIGHERED'
        },
        {
            id: 105,
            title: 'GeographyRealmsRegionsConcepts12th',
            isbn13: '9780471717867',
            config: 'HIGHERED'
        },
        {
            id: 106,
            title: 'GlobalMarketingManagement4th',
            isbn13: '9780471755272',
            config: 'HIGHERED'
        },
        {
            id: 107,
            title: 'HeatingVentilatingAirConditioning6th',
            isbn13: '9780471470151',
            config: 'HIGHERED'
        },
        {
            id: 108,
            title: 'InformationTechnologyDecisionMaking',
            isbn13: '9780471652939',
            config: 'HIGHERED'
        },
        {
            id: 109,
            title: 'InformationTechnologyManagement5th',
            isbn13: '9780471705222',
            config: 'HIGHERED'
        },
        {
            id: 110,
            title: 'InternationalEconomics',
            isbn13: '9780471794684',
            config: 'HIGHERED'
        },
        {
            id: 111,
            title: 'InternationalAccountingMultinationalEnterprises6th',
            isbn13: '9780471652694',
            config: 'HIGHERED'
        },
        {
            id: 112,
            title: 'IntermediateAccounting12th',
            isbn13: '9780471749554',
            config: 'HIGHERED'
        },
        {
            id: 113,
            title: 'IntroductionEngineeringThermodynamics2nd',
            isbn13: '9780471737599',
            config: 'HIGHERED'
        },
        {
            id: 114,
            title: 'IntroductionHumanBody8th',
            isbn13: '9780470230169',
            config: 'HIGHERED'
        },
        {
            id: 115,
            title: 'IntroducingPhysicalGeography4th',
            isbn13: '9780471679509',
            config: 'HIGHERED'
        },
        {
            id: 116,
            title: 'LabManual AP 2nd',
            isbn13: '0471691224',
            config: 'HIGHERED'
        },
        {
            id: 117,
            title: 'LabManual AP 3rd',
            isbn13: '9780470084700',
            config: 'HIGHERED'
        },
        {
            id: 118,
            title: 'LivingPsychology1st',
            isbn13: '9780471679387',
            config: 'HIGHERED'
        },
        {
            id: 119,
            title: 'Management8th',
            isbn13: '9780471454762',
            config: 'HIGHERED'
        },
        {
            id: 120,
            title: 'MasteringFars',
            isbn13: '0471717355',
            config: 'HIGHERED'
        },
        {
            id: 121,
            title: 'MaterialsScienceEngineering7th',
            isbn13: '0471736961',
            config: 'HIGHERED'
        },
        {
            id: 122,
            title: 'MaterialsProcessesManufacturing10th',
            isbn13: '9780470055120',
            config: 'HIGHERED'
        },
        {
            id: 123,
            title: 'MathematicsElementaryTeachers7th',
            isbn13: '0471662933',
            config: 'HIGHERED'
        },
        {
            id: 124,
            title: 'MathematicsElementaryTeachers8th',
            isbn13: '9780470105832',
            config: 'HIGHERED'
        },
        {
            id: 125,
            title: 'MechanicsMaterials6th',
            isbn13: '047170511X',
            config: 'HIGHERED'
        },
        {
            id: 126,
            title: 'MechanicsMaterials6th',
            isbn13: '9780471705116',
            config: 'HIGHERED'
        },
        {
            id: 127,
            title: 'MicrobiologyPrinciplesExplorations6th',
            isbn13: '9780471420842',
            config: 'HIGHERED'
        },
        {
            id: 128,
            title: 'ModernAuditingAssuranceServices8th',
            isbn13: '9780471230113',
            config: 'HIGHERED'
        },
        {
            id: 129,
            title: 'OperationsManagement',
            isbn13: '9780471347248',
            config: 'HIGHERED'
        },
        {
            id: 130,
            title: 'OrganizationalBehavior8th',
            isbn13: '9780471203674',
            config: 'HIGHERED'
        },
        {
            id: 131,
            title: 'PhysicalGeographyHumanEnvironment3rd',
            isbn13: '9780471480532',
            config: 'HIGHERED'
        },
        {
            id: 132,
            title: 'PhysicalChemistry4th',
            isbn13: '9780471215042',
            config: 'HIGHERED'
        },
        {
            id: 133,
            title: 'PowerAnatomyLabManual',
            isbn13: '9780471445586',
            config: 'HIGHERED'
        },
        {
            id: 134,
            title: 'PowerPhysCD',
            isbn13: '9780471662891',
            config: 'HIGHERED'
        },
        {
            id: 135,
            title: 'PrinciplesAnatomyPhysiology12th',
            isbn13: '9780470084717',
            config: 'HIGHERED'
        },
        {
            id: 136,
            title: 'PrinciplesHumanAnatomy10th',
            isbn13: '9780471420811',
            config: 'HIGHERED'
        },
        {
            id: 137,
            title: 'ProjectManagement',
            isbn13: '9780471715375',
            config: 'HIGHERED'
        },
        {
            id: 138,
            title: 'SoilMechanicsLabManual',
            isbn13: '9780471788300',
            config: 'HIGHERED'
        },
        {
            id: 139,
            title: 'StaticsAnalysisDesignSystems',
            isbn13: '9780471372998',
            config: 'HIGHERED'
        },
        {
            id: 140,
            title: 'TheEarthThroughTime8th',
            isbn13: '9780471697435',
            config: 'HIGHERED'
        },
        {
            id: 141,
            title: 'TheoryDesignMechanicalMeasurements4th',
            isbn13: '9780471445937',
            config: 'HIGHERED'
        },
        {
            id: 142,
            title: 'ThermodynamicsAnIntegratedLearningSystem',
            isbn13: '9780471143437',
            config: 'HIGHERED'
        },
        {
            id: 143,
            title: 'UsingMicrosoftOffice2003Tutorials',
            isbn13: '9780470046395',
            config: 'HIGHERED'
        },
        {
            id: 144,
            title: 'VisualizingEnvironmentalScience1st',
            isbn13: '9780471697022',
            config: 'HIGHERED'
        },
        {
            id: 145,
            title: 'VisualizingHumanBiology',
            isbn13: '9780471689324',
            config: 'HIGHERED'
        },
        {
            id: 146,
            title: 'VisualizingGeology',
            isbn13: '9780471747277',
            config: 'HIGHERED'
        },
        {
            id: 147,
            title: 'VisualizingPhysicalGeography',
            isbn13: '9780470095720',
            config: 'HIGHERED'
        },
        {
            id: 148,
            title: 'VisualizingPsychology',
            isbn13: '9780471767961',
            config: 'HIGHERED'
        },
        {
            id: 149,
            title: 'WebApplicationsConcepts',
            isbn13: '9780471204589',
            config: 'HIGHERED'
        },
        {
            id: 150,
            title: 'JustAsk ControlSystems',
            isbn13: '0471445770',
            config: 'HIGHERED'
        },
        {
            id: 151,
            title: 'AnatomyPhysiologyManualTherapies1st',
            isbn13: '9780470044964',
            config: 'HIGHERED'
        },
        {
            id: 152,
            title: 'HelpingChildrenLearnMathematics9th',
            isbn13: '9780470403068',
            config: 'HIGHERED'
        },
        {
            id: 153,
            title: 'ContemporaryBusiness13th',
            isbn13: '9780470433683',
            config: 'HIGHERED'
        },
        {
            id: 154,
            title: 'ProductProcessDesignPrinciplesSynthesisAnalysisDesign3rd',
            isbn13: '9780470048955',
            config: 'HIGHERED'
        },
        {
            id: 155,
            title: 'FundamentalsFluidMechanics6th',
            isbn13: '9780470262849',
            config: 'HIGHERED'
        },
        {
            id: 156,
            title: 'BecauseTeachingMatters2nd',
            isbn13: '9780470408209',
            config: 'HIGHERED'
        },
        {
            id: 157,
            title: 'OnlineSub 1001AlgebraIPracticeProblemsFD',
            isbn13: '9781118675557',
            config: 'HIGHERED'
        },
        {
            id: 158,
            title: 'Print 1001AlgebraIIPracticeProblemsFD',
            isbn13: '97811184746621',
            config: 'HIGHERED'
        },
        {
            id: 159,
            title: 'eBook 1001AlgebraIIPracticeProblemsFD',
            isbn13: '9781118446584',
            config: 'HIGHERED'
        },
        {
            id: 160,
            title: 'AIA2007',
            isbn13: '9780470251669',
            config: 'HIGHERED'
        },
        {
            id: 161,
            title: 'LGSv1',
            isbn13: '9780470379370',
            config: 'HIGHERED'
        },
        {
            id: 162,
            title: 'Valuation 5E',
            config: 'HIGHERED'
        },
        {
            id: 163,
            title: 'ConstructionContractAdministration',
            isbn13: '9780470635186',
            config: 'HIGHERED'
        },
        {
            id: 164,
            title: 'ConstructionSpecifications',
            isbn13: '9780470635209',
            config: 'HIGHERED'
        },
        {
            id: 165,
            title: 'ProjectDelivery',
            isbn13: '9780470635193',
            config: 'HIGHERED'
        },
        {
            id: 166,
            title: 'TheLawofTaxExempt Organizations10th',
            config: 'HIGHERED'
        },
        {
            id: 167,
            title: 'GoogleCoupon',
            config: 'HIGHERED'
        },
        {
            id: 168,
            title: 'Office 2010 eLearning Kit FD',
            isbn13: '9781118029725',
            config: 'HIGHERED'
        },
        {
            id: 169,
            title: 'Excel 2010 eLearning Kit FD',
            isbn13: '9781118110799',
            config: 'HIGHERED'
        },
        {
            id: 170,
            title: 'Windows 7 eLearning Kit FD',
            isbn13: '9781118031599',
            config: 'HIGHERED'
        },
        {
            id: 171,
            title: 'CPA 2012 AUD',
            isbn13: '9785ECPA00069',
            config: 'HIGHERED'
        },
        {
            id: 172,
            title: 'CPA 2012 FAR',
            isbn13: '9785ECPA00083',
            config: 'HIGHERED'
        },
        {
            id: 173,
            title: 'RTRP Online TestBank',
            isbn13: '9781118036570',
            config: 'HIGHERED'
        },
        {
            id: 174,
            title: 'WileyGAAP2013',
            config: 'HIGHERED'
        },
        {
            id: 175,
            title: 'Wiley Wilmott Summit',
            isbn13: '9781118511015',
            config: 'HIGHERED'
        },
        {
            id: 176,
            title: 'IFRS2012',
            isbn13: '9781118221327',
            config: 'HIGHERED'
        },
        {
            id: 177,
            title: 'TPandC for Tax Exempt Orgs 5E',
            isbn13: '9780470903445',
            config: 'HIGHERED'
        },
        {
            id: 178,
            title: 'RGS CD',
            config: 'HIGHERED'
        },
        {
            id: 179,
            title: 'TheOfficialGuideGMATReview13th',
            isbn13: '9781118109793',
            config: 'HIGHERED'
        },
        {
            id: 180,
            title: 'CCNA eTestPrep 640 802',
            isbn13: '9781118271766',
            config: 'HIGHERED'
        },
        {
            id: 181,
            title: 'CompTIA Network eTestPrep N10 005',
            isbn13: '9781118271773',
            config: 'HIGHERED'
        },
        {
            id: 182,
            title: 'CompTIA Security eTestPrep SY0 301',
            isbn13: '9781118271780',
            config: 'HIGHERED'
        },
        {
            id: 183,
            title: 'Windows8eLearningKitForDummies',
            isbn13: '9781118202876',
            config: 'HIGHERED'
        },
        {
            id: 184,
            title: 'BeginningWindows8AppDev',
            isbn13: '9781118012680',
            config: 'HIGHERED'
        },
        {
            id: 185,
            title: 'CCNA Virtual Lab2',
            isbn13: '9780470392591',
            config: 'HIGHERED'
        },
        {
            id: 186,
            title: 'CCNA Virtual Lab3',
            isbn13: '9781118431993',
            config: 'HIGHERED'
        },
        {
            id: 187,
            title: 'CCENT Virtual Lab1',
            isbn13: '9781118435243',
            config: 'HIGHERED'
        },
        {
            id: 188,
            title: 'Exploring Leadership StrengthsQuest',
            isbn13: '9781118417485',
            config: 'HIGHERED'
        },
        {
            id: 189,
            title: 'Family Wealth Sustainability',
            isbn13: '9781118345863',
            config: 'HIGHERED'
        },
        {
            id: 190,
            title: 'CompTIA Aplus eTestPrep',
            isbn13: '9781118388419',
            config: 'HIGHERED'
        },
        {
            id: 191,
            title: 'PHR SPHR eTestPrep',
            isbn13: '9781118469699',
            config: 'HIGHERED'
        },
        {
            id: 192,
            title: 'AHAProfessionalPractice14thEdition',
            isbn13: '9780470009574',
            config: 'HIGHERED'
        },
        {
            id: 193,
            title: 'WileyCIATestBankCompleteSetCD',
            isbn13: '9781118550984',
            config: 'HIGHERED'
        },
        {
            id: 194,
            title: 'CMA CD Intensive Review Complete',
            isbn13: '9781118481509',
            config: 'HIGHERED'
        },
        {
            id: 195,
            title: 'CMA Exam Review Part1',
            isbn13: '9781118480588',
            config: 'HIGHERED'
        },
        {
            id: 196,
            title: 'CMA Exam Review Part2',
            isbn13: '9781118480571',
            config: 'HIGHERED'
        },
        {
            id: 197,
            title: 'CMA Exam Review Complete',
            isbn13: '9781118480601',
            config: 'HIGHERED'
        },
        {
            id: 198,
            title: 'CMA CD Intensive Review Part1',
            isbn13: '9781118481523',
            config: 'HIGHERED'
        },
        {
            id: 199,
            title: 'CMA CD Intensive Review Part2',
            isbn13: '9781118481493',
            config: 'HIGHERED'
        },
        {
            id: 200,
            title: 'CMA Intensive Review Part1',
            isbn13: '9781118480687',
            config: 'HIGHERED'
        },
        {
            id: 201,
            title: 'CMA Intensive Review Part2',
            isbn13: '9781118480700',
            config: 'HIGHERED'
        },
        {
            id: 202,
            title: 'CMA Intensive Review Complete',
            isbn13: '9781118480663',
            config: 'HIGHERED'
        },
        {
            id: 203,
            title: 'WILEY IFRS 2013',
            isbn13: '9781118419793',
            config: 'HIGHERED'
        },
        {
            id: 204,
            title: 'Architects Handbook Pro Practice 14e',
            isbn13: '9780470009574',
            config: 'HIGHERED'
        },
        {
            id: 205,
            title: 'eBook 1001BasicMathPreAlgePracProbFD',
            isbn13: '9781118446546',
            config: 'HIGHERED'
        },
        {
            id: 206,
            title: 'Online 1001BasMathPreAlgePracProbFD',
            isbn13: '9781118677421',
            config: 'HIGHERED'
        },
        {
            id: 207,
            title: 'Print ASVAB FDPremierPlus',
            isbn13: '9781118525531',
            config: 'HIGHERED'
        },
        {
            id: 208,
            title: 'AvoidingOptionTradingTraps2ndEdition',
            isbn13: '9781118633571',
            config: 'HIGHERED'
        },
        {
            id: 209,
            title: 'Architect Handbook Pro Practice',
            isbn13: '978111308820',
            config: 'HIGHERED'
        },
        {
            id: 210,
            title: 'CSI Sustainable Design and Constr',
            isbn13: '9781118078556',
            config: 'HIGHERED'
        },
        {
            id: 211,
            title: 'Office 2013 eLearning',
            isbn13: '9781118490327',
            config: 'HIGHERED'
        },
        {
            id: 212,
            title: 'Dummies 1001 CCNA Routing Switching',
            isbn13: '9781118794296',
            config: 'HIGHERED'
        },
        {
            id: 213,
            title: 'Dummies 1001 Calculus Prac Quest',
            isbn13: '9781118496718',
            config: 'HIGHERED'
        },
        {
            id: 214,
            title: 'Java eLearning Kit FD',
            isbn13: '9781118098783',
            config: 'HIGHERED'
        },
        {
            id: 215,
            title: 'Off Guide for GMAT Review 2015',
            isbn13: '9781118914090',
            config: 'HIGHERED'
        },
        {
            id: 216,
            title: 'OfficialGuideGMATReview2015',
            isbn13: '9781118914090',
            config: 'HIGHERED'
        },
        {
            id: 217,
            title: 'OfficialGuideGMATVerbal2015',
            isbn13: '9781118914182',
            config: 'HIGHERED'
        },
        {
            id: 218,
            title: 'OfficialGuideGMATQuantitative2015',
            isbn13: '9781118914144',
            config: 'HIGHERED'
        },
        {
            id: 219,
            title: 'TheInteriorDesignProductivityToolbox',
            isbn13: '9781118680438',
            config: 'HIGHERED'
        },
        {
            id: 220,
            title: 'SunWindLightArch3rd',
            isbn13: '9780470945780',
            config: 'HIGHERED'
        },
        {
            id: 221,
            title: 'WS3ExamReview2015TestBank',
            isbn13: '9781118939970',
            config: 'HIGHERED'
        },
        {
            id: 222,
            title: 'WS6ExamReview2015TestBank',
            isbn13: '9781118857045',
            config: 'HIGHERED'
        },
        {
            id: 223,
            title: 'WS7ExamReview2015TestBank',
            isbn13: '9781118856857',
            config: 'HIGHERED'
        },
        {
            id: 224,
            title: 'WS9ExamReview2015TestBank',
            isbn13: '9781118857113',
            config: 'HIGHERED'
        },
        {
            id: 225,
            title: 'WS10ExamReview2015TestBank',
            isbn13: '9781118856956',
            config: 'HIGHERED'
        },
        {
            id: 226,
            title: 'WS24ExamReview2015TestBank',
            isbn13: '9781118856925',
            config: 'HIGHERED'
        },
        {
            id: 227,
            title: 'WS26ExamReview2015TestBank',
            isbn13: '9781118856741',
            config: 'HIGHERED'
        },
        {
            id: 228,
            title: 'WS55ExamReview2015TestBank',
            isbn13: '9781118856987',
            config: 'HIGHERED'
        },
        {
            id: 229,
            title: 'WS62ExamReview2015TestBank',
            isbn13: '9781118857168',
            config: 'HIGHERED'
        },
        {
            id: 230,
            title: 'WS63ExamReview2015TestBank',
            isbn13: '9781118857052',
            config: 'HIGHERED'
        },
        {
            id: 231,
            title: 'WS65ExamReview2015TestBank',
            isbn13: '9781118857069',
            config: 'HIGHERED'
        },
        {
            id: 232,
            title: 'WS66ExamReview2015TestBank',
            isbn13: '9781118857144',
            config: 'HIGHERED'
        },
        {
            id: 233,
            title: 'WS99ExamReview2015TestBank',
            isbn13: '9781118857311',
            config: 'HIGHERED'
        },
        {
            id: 234,
            title: 'CPA 2012 BEC',
            isbn13: '9785ECPA00076',
            config: 'HIGHERED'
        },
        {
            id: 235,
            title: 'CPA 2012 REG',
            isbn13: '9785ECPA00090',
            config: 'HIGHERED'
        },
        {
            id: 236,
            title: 'CPA 2012 Complete Set',
            isbn13: '9780470621905',
            config: 'HIGHERED'
        },
        {
            id: 237,
            title: 'Print 1001AlgebraIPracticeProblemsFD',
            isbn13: '9781118446713',
            config: 'HIGHERED'
        },
        {
            id: 238,
            title: 'Dummies 1001 Grammer Prac Quest',
            isbn13: '9781118745014',
            config: 'HIGHERED'
        },
        {
            id: 239,
            title: 'WS4ExamReview2015TestBank',
            isbn13: '9781118857014',
            config: 'HIGHERED'
        },
        {
            id: 240,
            title: 'eBook 1001AlgebraIPracticeProblemsFD',
            isbn13: '9781118446669',
            config: 'HIGHERED'
        },
        {
            id: 241,
            title: 'Print 1001BasicMathPreAlgePracProbFD',
            isbn13: '9781118446560',
            config: 'HIGHERED'
        },
        {
            id: 242,
            title: 'WS6ExamReview2013TestBank',
            isbn13: '9781118671085',
            config: 'HIGHERED'
        },
        {
            id: 243,
            title: 'WS7ExamReview2013TestBank',
            isbn13: '9781118672709',
            config: 'HIGHERED'
        },
        {
            id: 244,
            title: 'WS65ExamReview2013TestBank',
            isbn13: '9781118671108',
            config: 'HIGHERED'
        },
        {
            id: 245,
            title: 'WS4ExamReview2013TestBank',
            isbn13: '9781118671030',
            config: 'HIGHERED'
        },
        {
            id: 246,
            title: 'WS24ExamReview2013TestBank',
            isbn13: '9781118672532',
            config: 'HIGHERED'
        },
        {
            id: 247,
            title: 'WS63ExamReview2013TestBank',
            isbn13: '9781118671184',
            config: 'HIGHERED'
        },
        {
            id: 248,
            title: 'WS66ExamReview2013TestBank',
            isbn13: '9781118671122',
            config: 'HIGHERED'
        },
        {
            id: 249,
            title: 'WS55ExamReview2013TestBank',
            isbn13: '9781118672594',
            config: 'HIGHERED'
        },
        {
            id: 250,
            title: 'WS62ExamReview2013TestBank',
            isbn13: '9781118671207',
            config: 'HIGHERED'
        },
        {
            id: 251,
            title: 'WS99ExamReview2013TestBank',
            isbn13: '9781118670972',
            config: 'HIGHERED'
        },
        {
            id: 252,
            title: 'WS9ExamReview2013TestBank',
            isbn13: '9781118671115',
            config: 'HIGHERED'
        },
        {
            id: 253,
            title: 'WS10ExamReview2013TestBank',
            isbn13: '9781118671146',
            config: 'HIGHERED'
        },
        {
            id: 254,
            title: 'WS26ExamReview2013TestBank',
            isbn13: '9781118671054',
            config: 'HIGHERED'
        },
        {
            id: 255,
            title: 'Excel 2013 eLearning Kit FD',
            isbn13: '9781118493045',
            config: 'HIGHERED'
        },
        {
            id: 256,
            title: 'LSAT For Dummies 2e',
            isbn13: '9781118678237',
            config: 'HIGHERED'
        },
        {
            id: 257,
            title: 'AGSCD',
            config: 'HIGHERED'
        },
        {
            id: 258,
            title: 'CC4',
            config: 'HIGHERED'
        },
        {
            id: 259,
            title: 'PfeiferLibrary',
            config: 'HIGHERED'
        },
        {
            id: 260,
            title: 'TSE',
            config: 'HIGHERED'
        },
        {
            id: 261,
            title: 'Dummies1001ChemistryPracticeProblems',
            isbn13: '9781118549322',
            config: 'HIGHERED'
        },
        {
            id: 262,
            title: 'Windows8ForDummiesVideos',
            isbn13: '9781118271674',
            config: 'HIGHERED'
        },
        {
            id: 263,
            title: 'HoltEssentialEndocrinology',
            isbn13: '9781444330045',
            config: 'HIGHERED'
        },
        {
            id: 264,
            title: 'MRIinPractice4th',
            isbn13: '9781444337433',
            config: 'HIGHERED'
        },
        {
            id: 265,
            title: 'WertheimAtlasHumanInfectiousDisease',
            isbn13: '9781405184403',
            config: 'HIGHERED'
        },
        {
            id: 266,
            title: 'TobiasEssentialMedicalGenetics6e',
            isbn13: '9781405169745',
            config: 'HIGHERED'
        },
        {
            id: 267,
            title: 'SompayracHowtheImmuneSystemWorks4e',
            isbn13: '9780470657294',
            config: 'HIGHERED'
        },
        {
            id: 268,
            title: 'HoffbrandEssentialHaematology6e',
            isbn13: '9781405198905',
            config: 'HIGHERED'
        },
        {
            id: 269,
            title: 'RudolfPaediatricsChildHealth3e',
            isbn13: '9781405194747',
            config: 'HIGHERED'
        },
        {
            id: 270,
            title: 'SinhaEssentialNeonatalMedicine5e',
            isbn13: '9780470670408',
            config: 'HIGHERED'
        },
        {
            id: 271,
            title: 'DelvesRoittsEssentialImmunology12e',
            isbn13: '9781405196833',
            config: 'HIGHERED'
        },
        {
            id: 272,
            title: 'SchiffsDiseasesoftheLiver11thEdition',
            isbn13: '9780470654682',
            config: 'HIGHERED'
        },
        {
            id: 273,
            title: 'TextbookofDiabetes4thEdition',
            isbn13: '9781405191814',
            config: 'HIGHERED'
        },
        {
            id: 274,
            title: 'PrimeronTransplantation3rdEdition',
            isbn13: '9781405142670',
            config: 'HIGHERED'
        },
        {
            id: 275,
            title: 'ImplantableDefibrillators',
            isbn13: '9781405186384',
            config: 'HIGHERED'
        },
        {
            id: 276,
            title: 'MedicineataGlanceCoreCases',
            isbn13: '9781444335118',
            config: 'HIGHERED'
        },
        {
            id: 277,
            title: 'FundamentalsInfectionPrevention',
            isbn13: '9781118306659',
            config: 'HIGHERED'
        },
        {
            id: 278,
            title: 'GregorysPediatricAnesthesia5e',
            isbn13: '9781444333466',
            config: 'HIGHERED'
        }
    ];

var id = 279;

function get(id) {
    return _.findWhere(products, {id: parseInt(id + '', 10)});
}

exports.list = function (req, res) {
    res.send(products);
};

exports.request = function (req, res) {
    var newCode = {
        id: '1',
        date: new Date().toLocaleDateString(),
        code: products[0].codes.shift()
    };
    console.log(products[0].codes);

    res.status(201).send(newCode);
};
