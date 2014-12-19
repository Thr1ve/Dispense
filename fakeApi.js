var _ = require('underscore');

// var products = [
//     {
//         id:1,
//         isbn1313: '9781118452130',
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
//         isbn1313: '9780470290792',
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
//         isbn1313: '9780471692731',
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
//         isbn1313: '9781118743210',
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
//         isbn1313: '9787879254203',
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
//         isbn1313: '9780780549120',
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
            test: true
        },
        {
            id: 2,
            title: 'PersonnagesAnIntermediateCourseFrenchLanguageFrancophoneCulture4thEd',
            isbn13: '9780470432167',
            test: true
        },
        {
            id: 3,
            title: 'IntroductionFiniteElementAnalysisDesign',
            isbn13: '9780470125397'
        },
        {
            id: 4,
            title: 'DifferentialEquationsBoundaryValueProblems',
            isbn13: '9780470418505'
        },
        {
            id: 5,
            title: 'ContemporaryBusinessInternational13Ed',
            isbn13: '9780470445594'
        },
        {
            id: 6,
            title: 'FundamentalsFluidMechanicsInternational6Ed',
            isbn13: '9780470398814'
        },
        {
            id: 7,
            title: 'InformationTechnologyManagementTransformingOrganizationsDigitalEconomy6Ed',
            isbn13: '9780471787129'
        },
        {
            id: 8,
            title: 'LossModels From Data to Decisions 3E',
            isbn13: '9780470187814'
        },
        {
            id: 9,
            title: 'GlobalMarketingManagement5thEdInternationalStudentVersion',
            isbn13: '9780470505748'
        },
        {
            id: 10,
            title: 'Lab Manual AP 4th',
            isbn13: '9780470917534'
        },
        {
            id: 11,
            title: 'MOAC70688 LabsOnlineRegCode'
        },
        {
            id: 12,
            title: 'FundamentalsofBuildingConstructionMaterialsMethods6thEdition',
            isbn13: '9781118138915'
        },
        {
            id: 13,
            title: 'ParliamoitalianoACommunicativeApproach4thEdition',
            isbn13: '9780470526774'
        },
        {
            id: 14,
            title: 'GovernmentNotForProfitAccountingConceptsPractices6thEdition',
            isbn13: '9781118155974'
        },
        {
            id: 15,
            title: 'RealAnatomy2 WebVersion',
            isbn13: '9781118516720'
        },
        {
            id: 16,
            title: 'MOAC70432 LabsOnlineRegCode'
        },
        {
            id: 17,
            title: 'MOAC70236 Labs Online Reg Code',
            isbn13: '9780470874851'
        },
        {
            id: 18,
            title: 'MOAC70410 LabsOnline R2',
            isbn13: '9781118966112'
        },
        {
            id: 19,
            title: 'BeginningSpanish1stEdition',
            isbn13: '9780471727767'
        },
        {
            id: 20,
            title: 'AccountingPrinciplesPeachtreeCompleteAccountingWorkbook9thEdition',
            isbn13: '9780470386675'
        },
        {
            id: 21,
            title: 'FinancialRiskManagerHandbookSixthEdition',
            isbn13: '9780470904015'
        },
        {
            id: 22,
            title: 'ABriefIntroductionToFluidMechanics5thEdition',
            isbn13: '9780470596791'
        },
        {
            id: 23,
            title: 'AccountingPrinciplesPeachtreeCompleteAccountingWorkbook9thEd',
            isbn13: '9780470386675'
        },
        {
            id: 24,
            title: 'EnvironmentalScienceEarthasaLivingPlanet8thEdition',
            isbn13: '9780470520338'
        },
        {
            id: 25,
            title: 'eCollege WileyPLUS'
        },
        {
            id: 26,
            title: 'WileyPLUS v5'
        },
        {
            id: 27,
            title: 'LossModels From Data to Decisions 3E Online',
            isbn13: '9780470300275'
        },
        {
            id: 28,
            title: 'MaterialsScienceandEngineeringAnIntroduction8thEdition',
            isbn13: '9780470419977'
        },
        {
            id: 29,
            title: 'ContemporaryBusiness13thEdition2010Update',
            isbn13: '9780470496749'
        },
        {
            id: 30,
            title: 'DichoenvivoBeginningSpanishwithPersonalNativeSpeakerCoaching',
            isbn13: '9781118171219'
        },
        {
            id: 31,
            title: 'DichoyhechoBeginningSpanish9thEdition',
            isbn13: '9780470880609'
        },
        {
            id: 32,
            title: 'ProfessionalCooking7eCanadianEdition',
            isbn13: '9780470197547'
        },
        {
            id: 33,
            title: 'WileyResourceKits'
        },
        {
            id: 34,
            title: 'MechanicsofMaterials3e',
            isbn13: '9780470481813'
        },
        {
            id: 35,
            title: 'ProfessionalBaking6e',
            isbn13: '9781112023741'
        },
        {
            id: 36,
            title: 'InteractionsExploringtheFunctionsoftheHumanBodyDVD',
            isbn13: '9780470276617'
        },
        {
            id: 37,
            title: 'MarketingResearchEssentials8thEdition',
            isbn13: '9781118249321'
        },
        {
            id: 38,
            title: 'FundamentalsofModernManufacturingMaterialsProcessesandSystems5thEdition',
            isbn13: '9781118231463'
        },
        {
            id: 39,
            title: 'iProfile3',
            isbn13: '9781118176856'
        },
        {
            id: 40,
            title: 'ExploringManagement3rdEdition',
            isbn13: '9780470878217'
        },
        {
            id: 41,
            title: 'MOAC70646 LabsOnlineRegCode'
        },
        {
            id: 42,
            title: 'ContemporaryBusiness2012Update14e',
            isbn13: '9781118010303'
        },
        {
            id: 43,
            title: 'iProfile3 Canadian',
            isbn13: '9780470676349'
        },
        {
            id: 44,
            title: 'ProfessionalCooking7th',
            isbn13: '9780470197523'
        },
        {
            id: 45,
            title: 'DeGarmosMaterialsProcessesManufacturing11th',
            isbn13: '9780470924679'
        },
        {
            id: 46,
            title: 'SS13MATHDEMO'
        },
        {
            id: 47,
            title: 'GRANT FOUNDATIONS OF STRATEGY',
            isbn13: '9780470971277'
        },
        {
            id: 48,
            title: 'SEKARAN RESEARCH METHODS',
            isbn13: '9781119942252'
        },
        {
            id: 49,
            title: 'COMER PSYCHOLOGY',
            isbn13: '9781119941262'
        },
        {
            id: 50,
            title: 'MOAC70687 Win81 R2 LabsOnline',
            isbn13: '9781118882757'
        },
        {
            id: 51,
            title: 'LinguaMeeting 6Session',
            isbn13: '9781118946619'
        },
        {
            id: 52,
            title: 'eBook ASVAB FDPremierPlus',
            isbn13: '9781118525500'
        },
        {
            id: 53,
            title: 'MOAC70410 LabsOnlineRegCode'
        },
        {
            id: 54,
            title: 'MOAC70411 LabsOnlineRegCode'
        },
        {
            id: 55,
            title: 'Quantum'
        },
        {
            id: 56,
            title: 'LinguaMeeting 12Session',
            isbn13: '9781118946626'
        },
        {
            id: 57,
            title: 'LinguaMeeting En vivo universal',
            isbn13: '9781118986271'
        },
        {
            id: 58,
            title: 'CEC ProfessionalGardeManger'
        },
        {
            id: 59,
            title: 'Contemporary Business 15thED',
            isbn13: '9781118291986'
        },
        {
            id: 60,
            title: 'WileyPLUS Version 4'
        },
        {
            id: 61,
            title: 'AnatomyandPhysiologyFromSciencetoLife2ndEdition ISV',
            isbn13: '9780470448724'
        },
        {
            id: 62,
            title: 'ContemporaryBusiness14th',
            isbn13: '9780470531297'
        },
        {
            id: 63,
            title: 'MOAC70640 LabsOnlineRegCode'
        },
        {
            id: 64,
            title: 'MOAC70642 LabsOnlineRegCode'
        },
        {
            id: 65,
            title: 'MOAC70643 LabsOnlineRegCode'
        },
        {
            id: 66,
            title: 'MOAC70647 LabsOnlineRegCode'
        },
        {
            id: 67,
            title: 'MOAC70680 LabsOnlineRegCode'
        },
        {
            id: 68,
            title: 'MOAC70685 LabsOnlineRegCode'
        },
        {
            id: 69,
            title: 'MOAC70687 LabsOnlineRegCode'
        },
        {
            id: 70,
            title: 'MOAC70412 LabsOnlineRegCode'
        },
        {
            id: 71,
            title: 'PowerPhys2',
            isbn13: '9780470138021'
        },
        {
            id: 72,
            title: 'CEC ProfessionalBaking6e'
        },
        {
            id: 73,
            title: 'CEC ProfessionalCooking7e'
        },
        {
            id: 74,
            title: 'CEC ProfessionalCooking8e'
        },
        {
            id: 75,
            title: 'FARSOnline'
        },
        {
            id: 76,
            title: 'CONTEMPORARY STRATEGY ANALYSIS TEXT AND CASES',
            isbn13: '9781119941897'
        },
        {
            id: 77,
            title: 'WebCT'
        },
        {
            id: 78,
            title: 'CONTEMPORARY STRATEGY ANALYSIS',
            isbn13: '9781119941880'
        },
        {
            id: 79,
            title: 'ABriefIntroductionFluidMechanics4th',
            isbn13: '9780470039625'
        },
        {
            id: 80,
            title: 'AccountingToolsBusinessDecisionMaking2nd',
            isbn13: '9780470087442'
        },
        {
            id: 81,
            title: 'AnatomyPhysiologyScienceLife',
            isbn13: '9780471613183'
        },
        {
            id: 82,
            title: 'AnatomyPhysiologyScienceLife2nd',
            isbn13: '9780470227589'
        },
        {
            id: 83,
            title: 'AppliedStatisticsProbability4th',
            isbn13: '9780471745891'
        },
        {
            id: 84,
            title: 'AppliedElectromagneticsEarlyTransmission',
            isbn13: '9780470042571'
        },
        {
            id: 85,
            title: 'BusinessDataCommunications8th',
            isbn13: '9780471348078'
        },
        {
            id: 86,
            title: 'BusinessStatistics5th',
            isbn13: '9780471789567'
        },
        {
            id: 87,
            title: 'CellMolecularBiology4th',
            isbn13: '9780471465805'
        },
        {
            id: 88,
            title: 'CellMolecularBiology5th',
            isbn13: '9780470042175'
        },
        {
            id: 89,
            title: 'ConceptsBiochemistry3rd',
            isbn13: '9780471661795'
        },
        {
            id: 90,
            title: 'DifferentialEquations1st',
            isbn13: '9780471651413'
        },
        {
            id: 91,
            title: 'DynamicsAnalysisDesign',
            isbn13: '9780471401988'
        },
        {
            id: 92,
            title: 'ElementaryDifferential7th',
            isbn13: '0471307890'
        },
        {
            id: 93,
            title: 'ElementaryDifferentialEquations',
            isbn13: '9780471307891'
        },
        {
            id: 94,
            title: 'ElementaryDifferentialEquations9th',
            isbn13: '9780470039403'
        },
        {
            id: 95,
            title: 'ElementaryDifferentialEquationsBoundaryValue9th',
            isbn13: '9780470383346'
        },
        {
            id: 96,
            title: 'EngineeringMechanicsStatics6th',
            isbn13: '9780471739326'
        },
        {
            id: 97,
            title: 'EntrepreneurialFinance2nd',
            isbn13: '9780471230724'
        },
        {
            id: 98,
            title: 'FinancialAccountingValuationEmphasis',
            isbn13: '9780471203599'
        },
        {
            id: 99,
            title: 'FundamentalsMachineComponent',
            isbn13: '0471661775'
        },
        {
            id: 100,
            title: 'FundamentalsMaterialsScience3rd',
            isbn13: '9780470125373'
        },
        {
            id: 101,
            title: 'FundamentalsThermodynamics6th',
            isbn13: '9780471152323'
        },
        {
            id: 102,
            title: 'FundamentalsThermodynamics7th',
            isbn13: '9780470041925'
        },
        {
            id: 103,
            title: 'FundamentalsofEngineering',
            isbn13: '9780471787358'
        },
        {
            id: 104,
            title: 'FundamentalsFluidMechanics5th',
            isbn13: '9780471675822'
        },
        {
            id: 105,
            title: 'GeographyRealmsRegionsConcepts12th',
            isbn13: '9780471717867'
        },
        {
            id: 106,
            title: 'GlobalMarketingManagement4th',
            isbn13: '9780471755272'
        },
        {
            id: 107,
            title: 'HeatingVentilatingAirConditioning6th',
            isbn13: '9780471470151'
        },
        {
            id: 108,
            title: 'InformationTechnologyDecisionMaking',
            isbn13: '9780471652939'
        },
        {
            id: 109,
            title: 'InformationTechnologyManagement5th',
            isbn13: '9780471705222'
        },
        {
            id: 110,
            title: 'InternationalEconomics',
            isbn13: '9780471794684'
        },
        {
            id: 111,
            title: 'InternationalAccountingMultinationalEnterprises6th',
            isbn13: '9780471652694'
        },
        {
            id: 112,
            title: 'IntermediateAccounting12th',
            isbn13: '9780471749554'
        },
        {
            id: 113,
            title: 'IntroductionEngineeringThermodynamics2nd',
            isbn13: '9780471737599'
        },
        {
            id: 114,
            title: 'IntroductionHumanBody8th',
            isbn13: '9780470230169'
        },
        {
            id: 115,
            title: 'IntroducingPhysicalGeography4th',
            isbn13: '9780471679509'
        },
        {
            id: 116,
            title: 'LabManual AP 2nd',
            isbn13: '0471691224'
        },
        {
            id: 117,
            title: 'LabManual AP 3rd',
            isbn13: '9780470084700'
        },
        {
            id: 118,
            title: 'LivingPsychology1st',
            isbn13: '9780471679387'
        },
        {
            id: 119,
            title: 'Management8th',
            isbn13: '9780471454762'
        },
        {
            id: 120,
            title: 'MasteringFars',
            isbn13: '0471717355'
        },
        {
            id: 121,
            title: 'MaterialsScienceEngineering7th',
            isbn13: '0471736961'
        },
        {
            id: 122,
            title: 'MaterialsProcessesManufacturing10th',
            isbn13: '9780470055120'
        },
        {
            id: 123,
            title: 'MathematicsElementaryTeachers7th',
            isbn13: '0471662933'
        },
        {
            id: 124,
            title: 'MathematicsElementaryTeachers8th',
            isbn13: '9780470105832'
        },
        {
            id: 125,
            title: 'MechanicsMaterials6th',
            isbn13: '047170511X'
        },
        {
            id: 126,
            title: 'MechanicsMaterials6th',
            isbn13: '9780471705116'
        },
        {
            id: 127,
            title: 'MicrobiologyPrinciplesExplorations6th',
            isbn13: '9780471420842'
        },
        {
            id: 128,
            title: 'ModernAuditingAssuranceServices8th',
            isbn13: '9780471230113'
        },
        {
            id: 129,
            title: 'OperationsManagement',
            isbn13: '9780471347248'
        },
        {
            id: 130,
            title: 'OrganizationalBehavior8th',
            isbn13: '9780471203674'
        },
        {
            id: 131,
            title: 'PhysicalGeographyHumanEnvironment3rd',
            isbn13: '9780471480532'
        },
        {
            id: 132,
            title: 'PhysicalChemistry4th',
            isbn13: '9780471215042'
        },
        {
            id: 133,
            title: 'PowerAnatomyLabManual',
            isbn13: '9780471445586'
        },
        {
            id: 134,
            title: 'PowerPhysCD',
            isbn13: '9780471662891'
        },
        {
            id: 135,
            title: 'PrinciplesAnatomyPhysiology12th',
            isbn13: '9780470084717'
        },
        {
            id: 136,
            title: 'PrinciplesHumanAnatomy10th',
            isbn13: '9780471420811'
        },
        {
            id: 137,
            title: 'ProjectManagement',
            isbn13: '9780471715375'
        },
        {
            id: 138,
            title: 'SoilMechanicsLabManual',
            isbn13: '9780471788300'
        },
        {
            id: 139,
            title: 'StaticsAnalysisDesignSystems',
            isbn13: '9780471372998'
        },
        {
            id: 140,
            title: 'TheEarthThroughTime8th',
            isbn13: '9780471697435'
        },
        {
            id: 141,
            title: 'TheoryDesignMechanicalMeasurements4th',
            isbn13: '9780471445937'
        },
        {
            id: 142,
            title: 'ThermodynamicsAnIntegratedLearningSystem',
            isbn13: '9780471143437'
        },
        {
            id: 143,
            title: 'UsingMicrosoftOffice2003Tutorials',
            isbn13: '9780470046395'
        },
        {
            id: 144,
            title: 'VisualizingEnvironmentalScience1st',
            isbn13: '9780471697022'
        },
        {
            id: 145,
            title: 'VisualizingHumanBiology',
            isbn13: '9780471689324'
        },
        {
            id: 146,
            title: 'VisualizingGeology',
            isbn13: '9780471747277'
        },
        {
            id: 147,
            title: 'VisualizingPhysicalGeography',
            isbn13: '9780470095720'
        },
        {
            id: 148,
            title: 'VisualizingPsychology',
            isbn13: '9780471767961'
        },
        {
            id: 149,
            title: 'WebApplicationsConcepts',
            isbn13: '9780471204589'
        },
        {
            id: 150,
            title: 'JustAsk ControlSystems',
            isbn13: '0471445770'
        },
        {
            id: 151,
            title: 'AnatomyPhysiologyManualTherapies1st',
            isbn13: '9780470044964'
        },
        {
            id: 152,
            title: 'HelpingChildrenLearnMathematics9th',
            isbn13: '9780470403068'
        },
        {
            id: 153,
            title: 'ContemporaryBusiness13th',
            isbn13: '9780470433683'
        },
        {
            id: 154,
            title: 'ProductProcessDesignPrinciplesSynthesisAnalysisDesign3rd',
            isbn13: '9780470048955'
        },
        {
            id: 155,
            title: 'FundamentalsFluidMechanics6th',
            isbn13: '9780470262849'
        },
        {
            id: 156,
            title: 'BecauseTeachingMatters2nd',
            isbn13: '9780470408209'
        },
        {
            id: 157,
            title: 'OnlineSub 1001AlgebraIPracticeProblemsFD',
            isbn13: '9781118675557'
        },
        {
            id: 158,
            title: 'Print 1001AlgebraIIPracticeProblemsFD',
            isbn13: '97811184746621'
        },
        {
            id: 159,
            title: 'eBook 1001AlgebraIIPracticeProblemsFD',
            isbn13: '9781118446584'
        },
        {
            id: 160,
            title: 'AIA2007',
            isbn13: '9780470251669'
        },
        {
            id: 161,
            title: 'LGSv1',
            isbn13: '9780470379370'
        },
        {
            id: 162,
            title: 'Valuation 5E'
        },
        {
            id: 163,
            title: 'ConstructionContractAdministration',
            isbn13: '9780470635186'
        },
        {
            id: 164,
            title: 'ConstructionSpecifications',
            isbn13: '9780470635209'
        },
        {
            id: 165,
            title: 'ProjectDelivery',
            isbn13: '9780470635193'
        },
        {
            id: 166,
            title: 'TheLawofTaxExempt Organizations10th'
        },
        {
            id: 167,
            title: 'GoogleCoupon'
        },
        {
            id: 168,
            title: 'Office 2010 eLearning Kit FD',
            isbn13: '9781118029725'
        },
        {
            id: 169,
            title: 'Excel 2010 eLearning Kit FD',
            isbn13: '9781118110799'
        },
        {
            id: 170,
            title: 'Windows 7 eLearning Kit FD',
            isbn13: '9781118031599'
        },
        {
            id: 171,
            title: 'CPA 2012 AUD',
            isbn13: '9785ECPA00069'
        },
        {
            id: 172,
            title: 'CPA 2012 FAR',
            isbn13: '9785ECPA00083'
        },
        {
            id: 173,
            title: 'RTRP Online TestBank',
            isbn13: '9781118036570'
        },
        {
            id: 174,
            title: 'WileyGAAP2013'
        },
        {
            id: 175,
            title: 'Wiley Wilmott Summit',
            isbn13: '9781118511015'
        },
        {
            id: 176,
            title: 'IFRS2012',
            isbn13: '9781118221327'
        },
        {
            id: 177,
            title: 'TPandC for Tax Exempt Orgs 5E',
            isbn13: '9780470903445'
        },
        {
            id: 178,
            title: 'RGS CD'
        },
        {
            id: 179,
            title: 'TheOfficialGuideGMATReview13th',
            isbn13: '9781118109793'
        },
        {
            id: 180,
            title: 'CCNA eTestPrep 640 802',
            isbn13: '9781118271766'
        },
        {
            id: 181,
            title: 'CompTIA Network eTestPrep N10 005',
            isbn13: '9781118271773'
        },
        {
            id: 182,
            title: 'CompTIA Security eTestPrep SY0 301',
            isbn13: '9781118271780'
        },
        {
            id: 183,
            title: 'Windows8eLearningKitForDummies',
            isbn13: '9781118202876'
        },
        {
            id: 184,
            title: 'BeginningWindows8AppDev',
            isbn13: '9781118012680'
        },
        {
            id: 185,
            title: 'CCNA Virtual Lab2',
            isbn13: '9780470392591'
        },
        {
            id: 186,
            title: 'CCNA Virtual Lab3',
            isbn13: '9781118431993'
        },
        {
            id: 187,
            title: 'CCENT Virtual Lab1',
            isbn13: '9781118435243'
        },
        {
            id: 188,
            title: 'Exploring Leadership StrengthsQuest',
            isbn13: '9781118417485'
        },
        {
            id: 189,
            title: 'Family Wealth Sustainability',
            isbn13: '9781118345863'
        },
        {
            id: 190,
            title: 'CompTIA Aplus eTestPrep',
            isbn13: '9781118388419'
        },
        {
            id: 191,
            title: 'PHR SPHR eTestPrep',
            isbn13: '9781118469699'
        },
        {
            id: 192,
            title: 'AHAProfessionalPractice14thEdition',
            isbn13: '9780470009574'
        },
        {
            id: 193,
            title: 'WileyCIATestBankCompleteSetCD',
            isbn13: '9781118550984'
        },
        {
            id: 194,
            title: 'CMA CD Intensive Review Complete',
            isbn13: '9781118481509'
        },
        {
            id: 195,
            title: 'CMA Exam Review Part1',
            isbn13: '9781118480588'
        },
        {
            id: 196,
            title: 'CMA Exam Review Part2',
            isbn13: '9781118480571'
        },
        {
            id: 197,
            title: 'CMA Exam Review Complete',
            isbn13: '9781118480601'
        },
        {
            id: 198,
            title: 'CMA CD Intensive Review Part1',
            isbn13: '9781118481523'
        },
        {
            id: 199,
            title: 'CMA CD Intensive Review Part2',
            isbn13: '9781118481493'
        },
        {
            id: 200,
            title: 'CMA Intensive Review Part1',
            isbn13: '9781118480687'
        },
        {
            id: 201,
            title: 'CMA Intensive Review Part2',
            isbn13: '9781118480700'
        },
        {
            id: 202,
            title: 'CMA Intensive Review Complete',
            isbn13: '9781118480663'
        },
        {
            id: 203,
            title: 'WILEY IFRS 2013',
            isbn13: '9781118419793'
        },
        {
            id: 204,
            title: 'Architects Handbook Pro Practice 14e',
            isbn13: '9780470009574'
        },
        {
            id: 205,
            title: 'eBook 1001BasicMathPreAlgePracProbFD',
            isbn13: '9781118446546'
        },
        {
            id: 206,
            title: 'Online 1001BasMathPreAlgePracProbFD',
            isbn13: '9781118677421'
        },
        {
            id: 207,
            title: 'Print ASVAB FDPremierPlus',
            isbn13: '9781118525531'
        },
        {
            id: 208,
            title: 'AvoidingOptionTradingTraps2ndEdition',
            isbn13: '9781118633571'
        },
        {
            id: 209,
            title: 'Architect Handbook Pro Practice',
            isbn13: '978111308820'
        },
        {
            id: 210,
            title: 'CSI Sustainable Design and Constr',
            isbn13: '9781118078556'
        },
        {
            id: 211,
            title: 'Office 2013 eLearning',
            isbn13: '9781118490327'
        },
        {
            id: 212,
            title: 'Dummies 1001 CCNA Routing Switching',
            isbn13: '9781118794296'
        },
        {
            id: 213,
            title: 'Dummies 1001 Calculus Prac Quest',
            isbn13: '9781118496718'
        },
        {
            id: 214,
            title: 'Java eLearning Kit FD',
            isbn13: '9781118098783'
        },
        {
            id: 215,
            title: 'Off Guide for GMAT Review 2015',
            isbn13: '9781118914090'
        },
        {
            id: 216,
            title: 'OfficialGuideGMATReview2015',
            isbn13: '9781118914090'
        },
        {
            id: 217,
            title: 'OfficialGuideGMATVerbal2015',
            isbn13: '9781118914182'
        },
        {
            id: 218,
            title: 'OfficialGuideGMATQuantitative2015',
            isbn13: '9781118914144'
        },
        {
            id: 219,
            title: 'TheInteriorDesignProductivityToolbox',
            isbn13: '9781118680438'
        },
        {
            id: 220,
            title: 'SunWindLightArch3rd',
            isbn13: '9780470945780'
        },
        {
            id: 221,
            title: 'WS3ExamReview2015TestBank',
            isbn13: '9781118939970'
        },
        {
            id: 222,
            title: 'WS6ExamReview2015TestBank',
            isbn13: '9781118857045'
        },
        {
            id: 223,
            title: 'WS7ExamReview2015TestBank',
            isbn13: '9781118856857'
        },
        {
            id: 224,
            title: 'WS9ExamReview2015TestBank',
            isbn13: '9781118857113'
        },
        {
            id: 225,
            title: 'WS10ExamReview2015TestBank',
            isbn13: '9781118856956'
        },
        {
            id: 226,
            title: 'WS24ExamReview2015TestBank',
            isbn13: '9781118856925'
        },
        {
            id: 227,
            title: 'WS26ExamReview2015TestBank',
            isbn13: '9781118856741'
        },
        {
            id: 228,
            title: 'WS55ExamReview2015TestBank',
            isbn13: '9781118856987'
        },
        {
            id: 229,
            title: 'WS62ExamReview2015TestBank',
            isbn13: '9781118857168'
        },
        {
            id: 230,
            title: 'WS63ExamReview2015TestBank',
            isbn13: '9781118857052'
        },
        {
            id: 231,
            title: 'WS65ExamReview2015TestBank',
            isbn13: '9781118857069'
        },
        {
            id: 232,
            title: 'WS66ExamReview2015TestBank',
            isbn13: '9781118857144'
        },
        {
            id: 233,
            title: 'WS99ExamReview2015TestBank',
            isbn13: '9781118857311'
        },
        {
            id: 234,
            title: 'CPA 2012 BEC',
            isbn13: '9785ECPA00076'
        },
        {
            id: 235,
            title: 'CPA 2012 REG',
            isbn13: '9785ECPA00090'
        },
        {
            id: 236,
            title: 'CPA 2012 Complete Set',
            isbn13: '9780470621905'
        },
        {
            id: 237,
            title: 'Print 1001AlgebraIPracticeProblemsFD',
            isbn13: '9781118446713'
        },
        {
            id: 238,
            title: 'Dummies 1001 Grammer Prac Quest',
            isbn13: '9781118745014'
        },
        {
            id: 239,
            title: 'WS4ExamReview2015TestBank',
            isbn13: '9781118857014'
        },
        {
            id: 240,
            title: 'eBook 1001AlgebraIPracticeProblemsFD',
            isbn13: '9781118446669'
        },
        {
            id: 241,
            title: 'Print 1001BasicMathPreAlgePracProbFD',
            isbn13: '9781118446560'
        },
        {
            id: 242,
            title: 'WS6ExamReview2013TestBank',
            isbn13: '9781118671085'
        },
        {
            id: 243,
            title: 'WS7ExamReview2013TestBank',
            isbn13: '9781118672709'
        },
        {
            id: 244,
            title: 'WS65ExamReview2013TestBank',
            isbn13: '9781118671108'
        },
        {
            id: 245,
            title: 'WS4ExamReview2013TestBank',
            isbn13: '9781118671030'
        },
        {
            id: 246,
            title: 'WS24ExamReview2013TestBank',
            isbn13: '9781118672532'
        },
        {
            id: 247,
            title: 'WS63ExamReview2013TestBank',
            isbn13: '9781118671184'
        },
        {
            id: 248,
            title: 'WS66ExamReview2013TestBank',
            isbn13: '9781118671122'
        },
        {
            id: 249,
            title: 'WS55ExamReview2013TestBank',
            isbn13: '9781118672594'
        },
        {
            id: 250,
            title: 'WS62ExamReview2013TestBank',
            isbn13: '9781118671207'
        },
        {
            id: 251,
            title: 'WS99ExamReview2013TestBank',
            isbn13: '9781118670972'
        },
        {
            id: 252,
            title: 'WS9ExamReview2013TestBank',
            isbn13: '9781118671115'
        },
        {
            id: 253,
            title: 'WS10ExamReview2013TestBank',
            isbn13: '9781118671146'
        },
        {
            id: 254,
            title: 'WS26ExamReview2013TestBank',
            isbn13: '9781118671054'
        },
        {
            id: 255,
            title: 'Excel 2013 eLearning Kit FD',
            isbn13: '9781118493045'
        },
        {
            id: 256,
            title: 'LSAT For Dummies 2e',
            isbn13: '9781118678237'
        },
        {
            id: 257,
            title: 'AGSCD'
        },
        {
            id: 258,
            title: 'CC4'
        },
        {
            id: 259,
            title: 'PfeiferLibrary'
        },
        {
            id: 260,
            title: 'TSE'
        },
        {
            id: 261,
            title: 'Dummies1001ChemistryPracticeProblems',
            isbn13: '9781118549322'
        },
        {
            id: 262,
            title: 'Windows8ForDummiesVideos',
            isbn13: '9781118271674'
        },
        {
            id: 263,
            title: 'HoltEssentialEndocrinology',
            isbn13: '9781444330045'
        },
        {
            id: 264,
            title: 'MRIinPractice4th',
            isbn13: '9781444337433'
        },
        {
            id: 265,
            title: 'WertheimAtlasHumanInfectiousDisease',
            isbn13: '9781405184403'
        },
        {
            id: 266,
            title: 'TobiasEssentialMedicalGenetics6e',
            isbn13: '9781405169745'
        },
        {
            id: 267,
            title: 'SompayracHowtheImmuneSystemWorks4e',
            isbn13: '9780470657294'
        },
        {
            id: 268,
            title: 'HoffbrandEssentialHaematology6e',
            isbn13: '9781405198905'
        },
        {
            id: 269,
            title: 'RudolfPaediatricsChildHealth3e',
            isbn13: '9781405194747'
        },
        {
            id: 270,
            title: 'SinhaEssentialNeonatalMedicine5e',
            isbn13: '9780470670408'
        },
        {
            id: 271,
            title: 'DelvesRoittsEssentialImmunology12e',
            isbn13: '9781405196833'
        },
        {
            id: 272,
            title: 'SchiffsDiseasesoftheLiver11thEdition',
            isbn13: '9780470654682'
        },
        {
            id: 273,
            title: 'TextbookofDiabetes4thEdition',
            isbn13: '9781405191814'
        },
        {
            id: 274,
            title: 'PrimeronTransplantation3rdEdition',
            isbn13: '9781405142670'
        },
        {
            id: 275,
            title: 'ImplantableDefibrillators',
            isbn13: '9781405186384'
        },
        {
            id: 276,
            title: 'MedicineataGlanceCoreCases',
            isbn13: '9781444335118'
        },
        {
            id: 277,
            title: 'FundamentalsInfectionPrevention',
            isbn13: '9781118306659'
        },
        {
            id: 278,
            title: 'GregorysPediatricAnesthesia5e',
            isbn13: '9781444333466'
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
