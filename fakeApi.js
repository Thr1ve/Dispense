var _ = require('underscore');

// var products = [
//     {
//         id:1,
//         isbn13IGNORE: '9781118452130',
//         titleIGNORE: 'Exploring the Great Beyond',
//         author: 'Bob Jones',
//         category: 'Higher Education',
//         codesIGNORE: [
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
//         titleIGNORE: 'Human JavaScript' ,
//         author: 'Gordon B',
//         category: 'Professional Development',
//         codesIGNORE: [
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
//         titleIGNORE: 'Anatomy and Physiology',
//         author: 'Chrys C',
//         category: 'Trade',
//         codesIGNORE: [
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
//         titleIGNORE: 'Infinite Jest',
//         author: 'David Foster Wallace',
//         category: 'Higher Education',
//         codesIGNORE: [
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
//         titleIGNORE: '70-687 Configuring Windows 8.1',
//         author: 'Joe Schmoe',
//         category: 'Professional Development',
//         codesIGNORE: [
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
//         titleIGNORE: 'Lord of the Rings',
//         author: 'J.R. Tolkein',
//         category: 'Trade',
//         codesIGNORE: [
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
            config: 'HIGHERED',
            codes: [

                '1-CODE-ElementaryDifferentialEquationsInternational9th',
                '2-CODE-ElementaryDifferentialEquationsInternational9th'

            ]

        },
        {
            id: 2,
            title: 'PersonnagesAnIntermediateCourseFrenchLanguageFrancophoneCulture4thEd',
            isbn13: '9780470432167',
            config: 'HIGHERED',
            codes: [

                '1-CODE-PersonnagesAnIntermediateCourseFrenchLanguageFrancophoneCulture4thEd',
                '2-CODE-PersonnagesAnIntermediateCourseFrenchLanguageFrancophoneCulture4thEd'

            ]

        },
        {
            id: 3,
            title: 'IntroductionFiniteElementAnalysisDesign',
            isbn13: '9780470125397',
            config: 'HIGHERED',
            codes: [

                '1-CODE-IntroductionFiniteElementAnalysisDesign',
                '2-CODE-IntroductionFiniteElementAnalysisDesign'

            ]

        },
        {
            id: 4,
            title: 'DifferentialEquationsBoundaryValueProblems',
            isbn13: '9780470418505',
            config: 'HIGHERED',
            codes: [

                '1-CODE-DifferentialEquationsBoundaryValueProblems',
                '2-CODE-DifferentialEquationsBoundaryValueProblems'

            ]

        },
        {
            id: 5,
            title: 'ContemporaryBusinessInternational13Ed',
            isbn13: '9780470445594',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ContemporaryBusinessInternational13Ed',
                '2-CODE-ContemporaryBusinessInternational13Ed'

            ]

        },
        {
            id: 6,
            title: 'FundamentalsFluidMechanicsInternational6Ed',
            isbn13: '9780470398814',
            config: 'HIGHERED',
            codes: [

                '1-CODE-FundamentalsFluidMechanicsInternational6Ed',
                '2-CODE-FundamentalsFluidMechanicsInternational6Ed'

            ]

        },
        {
            id: 7,
            title: 'InformationTechnologyManagementTransformingOrganizationsDigitalEconomy6Ed',
            isbn13: '9780471787129',
            config: 'HIGHERED',
            codes: [

                '1-CODE-InformationTechnologyManagementTransformingOrganizationsDigitalEconomy6Ed',
                '2-CODE-InformationTechnologyManagementTransformingOrganizationsDigitalEconomy6Ed'

            ]

        },
        {
            id: 8,
            title: 'LossModels From Data to Decisions 3E',
            isbn13: '9780470187814',
            config: 'HIGHERED',
            codes: [

                '1-CODE-LossModels From Data to Decisions 3E',
                '2-CODE-LossModels From Data to Decisions 3E'

            ]

        },
        {
            id: 9,
            title: 'GlobalMarketingManagement5thEdInternationalStudentVersion',
            isbn13: '9780470505748',
            config: 'HIGHERED',
            codes: [

                '1-CODE-GlobalMarketingManagement5thEdInternationalStudentVersion',
                '2-CODE-GlobalMarketingManagement5thEdInternationalStudentVersion'

            ]

        },
        {
            id: 10,
            title: 'Lab Manual AP 4th',
            isbn13: '9780470917534',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Lab Manual AP 4th',
                '2-CODE-Lab Manual AP 4th'

            ]

        },
        {
            id: 11,
            title: 'MOAC70688 LabsOnlineRegCode',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MOAC70688 LabsOnlineRegCode',
                '2-CODE-MOAC70688 LabsOnlineRegCode'

            ]

        },
        {
            id: 12,
            title: 'FundamentalsofBuildingConstructionMaterialsMethods6thEdition',
            isbn13: '9781118138915',
            config: 'HIGHERED',
            codes: [

                '1-CODE-FundamentalsofBuildingConstructionMaterialsMethods6thEdition',
                '2-CODE-FundamentalsofBuildingConstructionMaterialsMethods6thEdition'

            ]

        },
        {
            id: 13,
            title: 'ParliamoitalianoACommunicativeApproach4thEdition',
            isbn13: '9780470526774',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ParliamoitalianoACommunicativeApproach4thEdition',
                '2-CODE-ParliamoitalianoACommunicativeApproach4thEdition'

            ]

        },
        {
            id: 14,
            title: 'GovernmentNotForProfitAccountingConceptsPractices6thEdition',
            isbn13: '9781118155974',
            config: 'HIGHERED',
            codes: [

                '1-CODE-GovernmentNotForProfitAccountingConceptsPractices6thEdition',
                '2-CODE-GovernmentNotForProfitAccountingConceptsPractices6thEdition'

            ]

        },
        {
            id: 15,
            title: 'RealAnatomy2 WebVersion',
            isbn13: '9781118516720',
            config: 'HIGHERED',
            codes: [

                '1-CODE-RealAnatomy2 WebVersion',
                '2-CODE-RealAnatomy2 WebVersion'

            ]

        },
        {
            id: 16,
            title: 'MOAC70432 LabsOnlineRegCode',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MOAC70432 LabsOnlineRegCode',
                '2-CODE-MOAC70432 LabsOnlineRegCode'

            ]

        },
        {
            id: 17,
            title: 'MOAC70236 Labs Online Reg Code',
            isbn13: '9780470874851',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MOAC70236 Labs Online Reg Code',
                '2-CODE-MOAC70236 Labs Online Reg Code'

            ]

        },
        {
            id: 18,
            title: 'MOAC70410 LabsOnline R2',
            isbn13: '9781118966112',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MOAC70410 LabsOnline R2',
                '2-CODE-MOAC70410 LabsOnline R2'

            ]

        },
        {
            id: 19,
            title: 'BeginningSpanish1stEdition',
            isbn13: '9780471727767',
            config: 'HIGHERED',
            codes: [

                '1-CODE-BeginningSpanish1stEdition',
                '2-CODE-BeginningSpanish1stEdition'

            ]

        },
        {
            id: 20,
            title: 'AccountingPrinciplesPeachtreeCompleteAccountingWorkbook9thEdition',
            isbn13: '9780470386675',
            config: 'HIGHERED',
            codes: [

                '1-CODE-AccountingPrinciplesPeachtreeCompleteAccountingWorkbook9thEdition',
                '2-CODE-AccountingPrinciplesPeachtreeCompleteAccountingWorkbook9thEdition'

            ]

        },
        {
            id: 21,
            title: 'FinancialRiskManagerHandbookSixthEdition',
            isbn13: '9780470904015',
            config: 'HIGHERED',
            codes: [

                '1-CODE-FinancialRiskManagerHandbookSixthEdition',
                '2-CODE-FinancialRiskManagerHandbookSixthEdition'

            ]

        },
        {
            id: 22,
            title: 'ABriefIntroductionToFluidMechanics5thEdition',
            isbn13: '9780470596791',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ABriefIntroductionToFluidMechanics5thEdition',
                '2-CODE-ABriefIntroductionToFluidMechanics5thEdition'

            ]

        },
        {
            id: 23,
            title: 'AccountingPrinciplesPeachtreeCompleteAccountingWorkbook9thEd',
            isbn13: '9780470386675',
            config: 'HIGHERED',
            codes: [

                '1-CODE-AccountingPrinciplesPeachtreeCompleteAccountingWorkbook9thEd',
                '2-CODE-AccountingPrinciplesPeachtreeCompleteAccountingWorkbook9thEd'

            ]

        },
        {
            id: 24,
            title: 'EnvironmentalScienceEarthasaLivingPlanet8thEdition',
            isbn13: '9780470520338',
            config: 'HIGHERED',
            codes: [

                '1-CODE-EnvironmentalScienceEarthasaLivingPlanet8thEdition',
                '2-CODE-EnvironmentalScienceEarthasaLivingPlanet8thEdition'

            ]

        },
        {
            id: 25,
            title: 'eCollege WileyPLUS',
            config: 'HIGHERED',
            codes: [

                '1-CODE-eCollege WileyPLUS',
                '2-CODE-eCollege WileyPLUS'

            ]

        },
        {
            id: 26,
            title: 'WileyPLUS v5',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WileyPLUS v5',
                '2-CODE-WileyPLUS v5'

            ]

        },
        {
            id: 27,
            title: 'LossModels From Data to Decisions 3E Online',
            isbn13: '9780470300275',
            config: 'HIGHERED',
            codes: [

                '1-CODE-LossModels From Data to Decisions 3E Online',
                '2-CODE-LossModels From Data to Decisions 3E Online'

            ]

        },
        {
            id: 28,
            title: 'MaterialsScienceandEngineeringAnIntroduction8thEdition',
            isbn13: '9780470419977',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MaterialsScienceandEngineeringAnIntroduction8thEdition',
                '2-CODE-MaterialsScienceandEngineeringAnIntroduction8thEdition'

            ]

        },
        {
            id: 29,
            title: 'ContemporaryBusiness13thEdition2010Update',
            isbn13: '9780470496749',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ContemporaryBusiness13thEdition2010Update',
                '2-CODE-ContemporaryBusiness13thEdition2010Update'

            ]

        },
        {
            id: 30,
            title: 'DichoenvivoBeginningSpanishwithPersonalNativeSpeakerCoaching',
            isbn13: '9781118171219',
            config: 'HIGHERED',
            codes: [

                '1-CODE-DichoenvivoBeginningSpanishwithPersonalNativeSpeakerCoaching',
                '2-CODE-DichoenvivoBeginningSpanishwithPersonalNativeSpeakerCoaching'

            ]

        },
        {
            id: 31,
            title: 'DichoyhechoBeginningSpanish9thEdition',
            isbn13: '9780470880609',
            config: 'HIGHERED',
            codes: [

                '1-CODE-DichoyhechoBeginningSpanish9thEdition',
                '2-CODE-DichoyhechoBeginningSpanish9thEdition'

            ]

        },
        {
            id: 32,
            title: 'ProfessionalCooking7eCanadianEdition',
            isbn13: '9780470197547',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ProfessionalCooking7eCanadianEdition',
                '2-CODE-ProfessionalCooking7eCanadianEdition'

            ]

        },
        {
            id: 33,
            title: 'WileyResourceKits',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WileyResourceKits',
                '2-CODE-WileyResourceKits'

            ]

        },
        {
            id: 34,
            title: 'MechanicsofMaterials3e',
            isbn13: '9780470481813',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MechanicsofMaterials3e',
                '2-CODE-MechanicsofMaterials3e'

            ]

        },
        {
            id: 35,
            title: 'ProfessionalBaking6e',
            isbn13: '9781112023741',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ProfessionalBaking6e',
                '2-CODE-ProfessionalBaking6e'

            ]

        },
        {
            id: 36,
            title: 'InteractionsExploringtheFunctionsoftheHumanBodyDVD',
            isbn13: '9780470276617',
            config: 'HIGHERED',
            codes: [

                '1-CODE-InteractionsExploringtheFunctionsoftheHumanBodyDVD',
                '2-CODE-InteractionsExploringtheFunctionsoftheHumanBodyDVD'

            ]

        },
        {
            id: 37,
            title: 'MarketingResearchEssentials8thEdition',
            isbn13: '9781118249321',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MarketingResearchEssentials8thEdition',
                '2-CODE-MarketingResearchEssentials8thEdition'

            ]

        },
        {
            id: 38,
            title: 'FundamentalsofModernManufacturingMaterialsProcessesandSystems5thEdition',
            isbn13: '9781118231463',
            config: 'HIGHERED',
            codes: [

                '1-CODE-FundamentalsofModernManufacturingMaterialsProcessesandSystems5thEdition',
                '2-CODE-FundamentalsofModernManufacturingMaterialsProcessesandSystems5thEdition'

            ]

        },
        {
            id: 39,
            title: 'iProfile3',
            isbn13: '9781118176856',
            config: 'HIGHERED',
            codes: [

                '1-CODE-iProfile3',
                '2-CODE-iProfile3'

            ]

        },
        {
            id: 40,
            title: 'ExploringManagement3rdEdition',
            isbn13: '9780470878217',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ExploringManagement3rdEdition',
                '2-CODE-ExploringManagement3rdEdition'

            ]

        },
        {
            id: 41,
            title: 'MOAC70646 LabsOnlineRegCode',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MOAC70646 LabsOnlineRegCode',
                '2-CODE-MOAC70646 LabsOnlineRegCode'

            ]

        },
        {
            id: 42,
            title: 'ContemporaryBusiness2012Update14e',
            isbn13: '9781118010303',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ContemporaryBusiness2012Update14e',
                '2-CODE-ContemporaryBusiness2012Update14e'

            ]

        },
        {
            id: 43,
            title: 'iProfile3 Canadian',
            isbn13: '9780470676349',
            config: 'HIGHERED',
            codes: [

                '1-CODE-iProfile3 Canadian',
                '2-CODE-iProfile3 Canadian'

            ]

        },
        {
            id: 44,
            title: 'ProfessionalCooking7th',
            isbn13: '9780470197523',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ProfessionalCooking7th',
                '2-CODE-ProfessionalCooking7th'

            ]

        },
        {
            id: 45,
            title: 'DeGarmosMaterialsProcessesManufacturing11th',
            isbn13: '9780470924679',
            config: 'HIGHERED',
            codes: [

                '1-CODE-DeGarmosMaterialsProcessesManufacturing11th',
                '2-CODE-DeGarmosMaterialsProcessesManufacturing11th'

            ]

        },
        {
            id: 46,
            title: 'SS13MATHDEMO',
            config: 'HIGHERED',
            codes: [

                '1-CODE-SS13MATHDEMO',
                '2-CODE-SS13MATHDEMO'

            ]

        },
        {
            id: 47,
            title: 'GRANT FOUNDATIONS OF STRATEGY',
            isbn13: '9780470971277',
            config: 'HIGHERED',
            codes: [

                '1-CODE-GRANT FOUNDATIONS OF STRATEGY',
                '2-CODE-GRANT FOUNDATIONS OF STRATEGY'

            ]

        },
        {
            id: 48,
            title: 'SEKARAN RESEARCH METHODS',
            isbn13: '9781119942252',
            config: 'HIGHERED',
            codes: [

                '1-CODE-SEKARAN RESEARCH METHODS',
                '2-CODE-SEKARAN RESEARCH METHODS'

            ]

        },
        {
            id: 49,
            title: 'COMER PSYCHOLOGY',
            isbn13: '9781119941262',
            config: 'HIGHERED',
            codes: [

                '1-CODE-COMER PSYCHOLOGY',
                '2-CODE-COMER PSYCHOLOGY'

            ]

        },
        {
            id: 50,
            title: 'MOAC70687 Win81 R2 LabsOnline',
            isbn13: '9781118882757',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MOAC70687 Win81 R2 LabsOnline',
                '2-CODE-MOAC70687 Win81 R2 LabsOnline'

            ]

        },
        {
            id: 51,
            title: 'LinguaMeeting 6Session',
            isbn13: '9781118946619',
            config: 'HIGHERED',
            codes: [

                '1-CODE-LinguaMeeting 6Session',
                '2-CODE-LinguaMeeting 6Session'

            ]

        },
        {
            id: 52,
            title: 'eBook ASVAB FDPremierPlus',
            isbn13: '9781118525500',
            config: 'HIGHERED',
            codes: [

                '1-CODE-eBook ASVAB FDPremierPlus',
                '2-CODE-eBook ASVAB FDPremierPlus'

            ]

        },
        {
            id: 53,
            title: 'MOAC70410 LabsOnlineRegCode',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MOAC70410 LabsOnlineRegCode',
                '2-CODE-MOAC70410 LabsOnlineRegCode'

            ]

        },
        {
            id: 54,
            title: 'MOAC70411 LabsOnlineRegCode',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MOAC70411 LabsOnlineRegCode',
                '2-CODE-MOAC70411 LabsOnlineRegCode'

            ]

        },
        {
            id: 55,
            title: 'Quantum',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Quantum',
                '2-CODE-Quantum'

            ]

        },
        {
            id: 56,
            title: 'LinguaMeeting 12Session',
            isbn13: '9781118946626',
            config: 'HIGHERED',
            codes: [

                '1-CODE-LinguaMeeting 12Session',
                '2-CODE-LinguaMeeting 12Session'

            ]

        },
        {
            id: 57,
            title: 'LinguaMeeting En vivo universal',
            isbn13: '9781118986271',
            config: 'HIGHERED',
            codes: [

                '1-CODE-LinguaMeeting En vivo universal',
                '2-CODE-LinguaMeeting En vivo universal'

            ]

        },
        {
            id: 58,
            title: 'CEC ProfessionalGardeManger',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CEC ProfessionalGardeManger',
                '2-CODE-CEC ProfessionalGardeManger'

            ]

        },
        {
            id: 59,
            title: 'Contemporary Business 15thED',
            isbn13: '9781118291986',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Contemporary Business 15thED',
                '2-CODE-Contemporary Business 15thED'

            ]

        },
        {
            id: 60,
            title: 'WileyPLUS Version 4',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WileyPLUS Version 4',
                '2-CODE-WileyPLUS Version 4'

            ]

        },
        {
            id: 61,
            title: 'AnatomyandPhysiologyFromSciencetoLife2ndEdition ISV',
            isbn13: '9780470448724',
            config: 'HIGHERED',
            codes: [

                '1-CODE-AnatomyandPhysiologyFromSciencetoLife2ndEdition ISV',
                '2-CODE-AnatomyandPhysiologyFromSciencetoLife2ndEdition ISV'

            ]

        },
        {
            id: 62,
            title: 'ContemporaryBusiness14th',
            isbn13: '9780470531297',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ContemporaryBusiness14th',
                '2-CODE-ContemporaryBusiness14th'

            ]

        },
        {
            id: 63,
            title: 'MOAC70640 LabsOnlineRegCode',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MOAC70640 LabsOnlineRegCode',
                '2-CODE-MOAC70640 LabsOnlineRegCode'

            ]

        },
        {
            id: 64,
            title: 'MOAC70642 LabsOnlineRegCode',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MOAC70642 LabsOnlineRegCode',
                '2-CODE-MOAC70642 LabsOnlineRegCode'

            ]

        },
        {
            id: 65,
            title: 'MOAC70643 LabsOnlineRegCode',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MOAC70643 LabsOnlineRegCode',
                '2-CODE-MOAC70643 LabsOnlineRegCode'

            ]

        },
        {
            id: 66,
            title: 'MOAC70647 LabsOnlineRegCode',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MOAC70647 LabsOnlineRegCode',
                '2-CODE-MOAC70647 LabsOnlineRegCode'

            ]

        },
        {
            id: 67,
            title: 'MOAC70680 LabsOnlineRegCode',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MOAC70680 LabsOnlineRegCode',
                '2-CODE-MOAC70680 LabsOnlineRegCode'

            ]

        },
        {
            id: 68,
            title: 'MOAC70685 LabsOnlineRegCode',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MOAC70685 LabsOnlineRegCode',
                '2-CODE-MOAC70685 LabsOnlineRegCode'

            ]

        },
        {
            id: 69,
            title: 'MOAC70687 LabsOnlineRegCode',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MOAC70687 LabsOnlineRegCode',
                '2-CODE-MOAC70687 LabsOnlineRegCode'

            ]

        },
        {
            id: 70,
            title: 'MOAC70412 LabsOnlineRegCode',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MOAC70412 LabsOnlineRegCode',
                '2-CODE-MOAC70412 LabsOnlineRegCode'

            ]

        },
        {
            id: 71,
            title: 'PowerPhys2',
            isbn13: '9780470138021',
            config: 'HIGHERED',
            codes: [

                '1-CODE-PowerPhys2',
                '2-CODE-PowerPhys2'

            ]

        },
        {
            id: 72,
            title: 'CEC ProfessionalBaking6e',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CEC ProfessionalBaking6e',
                '2-CODE-CEC ProfessionalBaking6e'

            ]

        },
        {
            id: 73,
            title: 'CEC ProfessionalCooking7e',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CEC ProfessionalCooking7e',
                '2-CODE-CEC ProfessionalCooking7e'

            ]

        },
        {
            id: 74,
            title: 'CEC ProfessionalCooking8e',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CEC ProfessionalCooking8e',
                '2-CODE-CEC ProfessionalCooking8e'

            ]

        },
        {
            id: 75,
            title: 'FARSOnline',
            config: 'HIGHERED',
            codes: [

                '1-CODE-FARSOnline',
                '2-CODE-FARSOnline'

            ]

        },
        {
            id: 76,
            title: 'CONTEMPORARY STRATEGY ANALYSIS TEXT AND CASES',
            isbn13: '9781119941897',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CONTEMPORARY STRATEGY ANALYSIS TEXT AND CASES',
                '2-CODE-CONTEMPORARY STRATEGY ANALYSIS TEXT AND CASES'

            ]

        },
        {
            id: 77,
            title: 'WebCT',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WebCT',
                '2-CODE-WebCT'

            ]

        },
        {
            id: 78,
            title: 'CONTEMPORARY STRATEGY ANALYSIS',
            isbn13: '9781119941880',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CONTEMPORARY STRATEGY ANALYSIS',
                '2-CODE-CONTEMPORARY STRATEGY ANALYSIS'

            ]

        },
        {
            id: 79,
            title: 'ABriefIntroductionFluidMechanics4th',
            isbn13: '9780470039625',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ABriefIntroductionFluidMechanics4th',
                '2-CODE-ABriefIntroductionFluidMechanics4th'

            ]

        },
        {
            id: 80,
            title: 'AccountingToolsBusinessDecisionMaking2nd',
            isbn13: '9780470087442',
            config: 'HIGHERED',
            codes: [

                '1-CODE-AccountingToolsBusinessDecisionMaking2nd',
                '2-CODE-AccountingToolsBusinessDecisionMaking2nd'

            ]

        },
        {
            id: 81,
            title: 'AnatomyPhysiologyScienceLife',
            isbn13: '9780471613183',
            config: 'HIGHERED',
            codes: [

                '1-CODE-AnatomyPhysiologyScienceLife',
                '2-CODE-AnatomyPhysiologyScienceLife'

            ]

        },
        {
            id: 82,
            title: 'AnatomyPhysiologyScienceLife2nd',
            isbn13: '9780470227589',
            config: 'HIGHERED',
            codes: [

                '1-CODE-AnatomyPhysiologyScienceLife2nd',
                '2-CODE-AnatomyPhysiologyScienceLife2nd'

            ]

        },
        {
            id: 83,
            title: 'AppliedStatisticsProbability4th',
            isbn13: '9780471745891',
            config: 'HIGHERED',
            codes: [

                '1-CODE-AppliedStatisticsProbability4th',
                '2-CODE-AppliedStatisticsProbability4th'

            ]

        },
        {
            id: 84,
            title: 'AppliedElectromagneticsEarlyTransmission',
            isbn13: '9780470042571',
            config: 'HIGHERED',
            codes: [

                '1-CODE-AppliedElectromagneticsEarlyTransmission',
                '2-CODE-AppliedElectromagneticsEarlyTransmission'

            ]

        },
        {
            id: 85,
            title: 'BusinessDataCommunications8th',
            isbn13: '9780471348078',
            config: 'HIGHERED',
            codes: [

                '1-CODE-BusinessDataCommunications8th',
                '2-CODE-BusinessDataCommunications8th'

            ]

        },
        {
            id: 86,
            title: 'BusinessStatistics5th',
            isbn13: '9780471789567',
            config: 'HIGHERED',
            codes: [

                '1-CODE-BusinessStatistics5th',
                '2-CODE-BusinessStatistics5th'

            ]

        },
        {
            id: 87,
            title: 'CellMolecularBiology4th',
            isbn13: '9780471465805',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CellMolecularBiology4th',
                '2-CODE-CellMolecularBiology4th'

            ]

        },
        {
            id: 88,
            title: 'CellMolecularBiology5th',
            isbn13: '9780470042175',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CellMolecularBiology5th',
                '2-CODE-CellMolecularBiology5th'

            ]

        },
        {
            id: 89,
            title: 'ConceptsBiochemistry3rd',
            isbn13: '9780471661795',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ConceptsBiochemistry3rd',
                '2-CODE-ConceptsBiochemistry3rd'

            ]

        },
        {
            id: 90,
            title: 'DifferentialEquations1st',
            isbn13: '9780471651413',
            config: 'HIGHERED',
            codes: [

                '1-CODE-DifferentialEquations1st',
                '2-CODE-DifferentialEquations1st'

            ]

        },
        {
            id: 91,
            title: 'DynamicsAnalysisDesign',
            isbn13: '9780471401988',
            config: 'HIGHERED',
            codes: [

                '1-CODE-DynamicsAnalysisDesign',
                '2-CODE-DynamicsAnalysisDesign'

            ]

        },
        {
            id: 92,
            title: 'ElementaryDifferential7th',
            isbn13: '0471307890',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ElementaryDifferential7th',
                '2-CODE-ElementaryDifferential7th'

            ]

        },
        {
            id: 93,
            title: 'ElementaryDifferentialEquations',
            isbn13: '9780471307891',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ElementaryDifferentialEquations',
                '2-CODE-ElementaryDifferentialEquations'

            ]

        },
        {
            id: 94,
            title: 'ElementaryDifferentialEquations9th',
            isbn13: '9780470039403',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ElementaryDifferentialEquations9th',
                '2-CODE-ElementaryDifferentialEquations9th'

            ]

        },
        {
            id: 95,
            title: 'ElementaryDifferentialEquationsBoundaryValue9th',
            isbn13: '9780470383346',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ElementaryDifferentialEquationsBoundaryValue9th',
                '2-CODE-ElementaryDifferentialEquationsBoundaryValue9th'

            ]

        },
        {
            id: 96,
            title: 'EngineeringMechanicsStatics6th',
            isbn13: '9780471739326',
            config: 'HIGHERED',
            codes: [

                '1-CODE-EngineeringMechanicsStatics6th',
                '2-CODE-EngineeringMechanicsStatics6th'

            ]

        },
        {
            id: 97,
            title: 'EntrepreneurialFinance2nd',
            isbn13: '9780471230724',
            config: 'HIGHERED',
            codes: [

                '1-CODE-EntrepreneurialFinance2nd',
                '2-CODE-EntrepreneurialFinance2nd'

            ]

        },
        {
            id: 98,
            title: 'FinancialAccountingValuationEmphasis',
            isbn13: '9780471203599',
            config: 'HIGHERED',
            codes: [

                '1-CODE-FinancialAccountingValuationEmphasis',
                '2-CODE-FinancialAccountingValuationEmphasis'

            ]

        },
        {
            id: 99,
            title: 'FundamentalsMachineComponent',
            isbn13: '0471661775',
            config: 'HIGHERED',
            codes: [

                '1-CODE-FundamentalsMachineComponent',
                '2-CODE-FundamentalsMachineComponent'

            ]

        },
        {
            id: 100,
            title: 'FundamentalsMaterialsScience3rd',
            isbn13: '9780470125373',
            config: 'HIGHERED',
            codes: [

                '1-CODE-FundamentalsMaterialsScience3rd',
                '2-CODE-FundamentalsMaterialsScience3rd'

            ]

        },
        {
            id: 101,
            title: 'FundamentalsThermodynamics6th',
            isbn13: '9780471152323',
            config: 'HIGHERED',
            codes: [

                '1-CODE-FundamentalsThermodynamics6th',
                '2-CODE-FundamentalsThermodynamics6th'

            ]

        },
        {
            id: 102,
            title: 'FundamentalsThermodynamics7th',
            isbn13: '9780470041925',
            config: 'HIGHERED',
            codes: [

                '1-CODE-FundamentalsThermodynamics7th',
                '2-CODE-FundamentalsThermodynamics7th'

            ]

        },
        {
            id: 103,
            title: 'FundamentalsofEngineering',
            isbn13: '9780471787358',
            config: 'HIGHERED',
            codes: [

                '1-CODE-FundamentalsofEngineering',
                '2-CODE-FundamentalsofEngineering'

            ]

        },
        {
            id: 104,
            title: 'FundamentalsFluidMechanics5th',
            isbn13: '9780471675822',
            config: 'HIGHERED',
            codes: [

                '1-CODE-FundamentalsFluidMechanics5th',
                '2-CODE-FundamentalsFluidMechanics5th'

            ]

        },
        {
            id: 105,
            title: 'GeographyRealmsRegionsConcepts12th',
            isbn13: '9780471717867',
            config: 'HIGHERED',
            codes: [

                '1-CODE-GeographyRealmsRegionsConcepts12th',
                '2-CODE-GeographyRealmsRegionsConcepts12th'

            ]

        },
        {
            id: 106,
            title: 'GlobalMarketingManagement4th',
            isbn13: '9780471755272',
            config: 'HIGHERED',
            codes: [

                '1-CODE-GlobalMarketingManagement4th',
                '2-CODE-GlobalMarketingManagement4th'

            ]

        },
        {
            id: 107,
            title: 'HeatingVentilatingAirConditioning6th',
            isbn13: '9780471470151',
            config: 'HIGHERED',
            codes: [

                '1-CODE-HeatingVentilatingAirConditioning6th',
                '2-CODE-HeatingVentilatingAirConditioning6th'

            ]

        },
        {
            id: 108,
            title: 'InformationTechnologyDecisionMaking',
            isbn13: '9780471652939',
            config: 'HIGHERED',
            codes: [

                '1-CODE-InformationTechnologyDecisionMaking',
                '2-CODE-InformationTechnologyDecisionMaking'

            ]

        },
        {
            id: 109,
            title: 'InformationTechnologyManagement5th',
            isbn13: '9780471705222',
            config: 'HIGHERED',
            codes: [

                '1-CODE-InformationTechnologyManagement5th',
                '2-CODE-InformationTechnologyManagement5th'

            ]

        },
        {
            id: 110,
            title: 'InternationalEconomics',
            isbn13: '9780471794684',
            config: 'HIGHERED',
            codes: [

                '1-CODE-InternationalEconomics',
                '2-CODE-InternationalEconomics'

            ]

        },
        {
            id: 111,
            title: 'InternationalAccountingMultinationalEnterprises6th',
            isbn13: '9780471652694',
            config: 'HIGHERED',
            codes: [

                '1-CODE-InternationalAccountingMultinationalEnterprises6th',
                '2-CODE-InternationalAccountingMultinationalEnterprises6th'

            ]

        },
        {
            id: 112,
            title: 'IntermediateAccounting12th',
            isbn13: '9780471749554',
            config: 'HIGHERED',
            codes: [

                '1-CODE-IntermediateAccounting12th',
                '2-CODE-IntermediateAccounting12th'

            ]

        },
        {
            id: 113,
            title: 'IntroductionEngineeringThermodynamics2nd',
            isbn13: '9780471737599',
            config: 'HIGHERED',
            codes: [

                '1-CODE-IntroductionEngineeringThermodynamics2nd',
                '2-CODE-IntroductionEngineeringThermodynamics2nd'

            ]

        },
        {
            id: 114,
            title: 'IntroductionHumanBody8th',
            isbn13: '9780470230169',
            config: 'HIGHERED',
            codes: [

                '1-CODE-IntroductionHumanBody8th',
                '2-CODE-IntroductionHumanBody8th'

            ]

        },
        {
            id: 115,
            title: 'IntroducingPhysicalGeography4th',
            isbn13: '9780471679509',
            config: 'HIGHERED',
            codes: [

                '1-CODE-IntroducingPhysicalGeography4th',
                '2-CODE-IntroducingPhysicalGeography4th'

            ]

        },
        {
            id: 116,
            title: 'LabManual AP 2nd',
            isbn13: '0471691224',
            config: 'HIGHERED',
            codes: [

                '1-CODE-LabManual AP 2nd',
                '2-CODE-LabManual AP 2nd'

            ]

        },
        {
            id: 117,
            title: 'LabManual AP 3rd',
            isbn13: '9780470084700',
            config: 'HIGHERED',
            codes: [

                '1-CODE-LabManual AP 3rd',
                '2-CODE-LabManual AP 3rd'

            ]

        },
        {
            id: 118,
            title: 'LivingPsychology1st',
            isbn13: '9780471679387',
            config: 'HIGHERED',
            codes: [

                '1-CODE-LivingPsychology1st',
                '2-CODE-LivingPsychology1st'

            ]

        },
        {
            id: 119,
            title: 'Management8th',
            isbn13: '9780471454762',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Management8th',
                '2-CODE-Management8th'

            ]

        },
        {
            id: 120,
            title: 'MasteringFars',
            isbn13: '0471717355',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MasteringFars',
                '2-CODE-MasteringFars'

            ]

        },
        {
            id: 121,
            title: 'MaterialsScienceEngineering7th',
            isbn13: '0471736961',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MaterialsScienceEngineering7th',
                '2-CODE-MaterialsScienceEngineering7th'

            ]

        },
        {
            id: 122,
            title: 'MaterialsProcessesManufacturing10th',
            isbn13: '9780470055120',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MaterialsProcessesManufacturing10th',
                '2-CODE-MaterialsProcessesManufacturing10th'

            ]

        },
        {
            id: 123,
            title: 'MathematicsElementaryTeachers7th',
            isbn13: '0471662933',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MathematicsElementaryTeachers7th',
                '2-CODE-MathematicsElementaryTeachers7th'

            ]

        },
        {
            id: 124,
            title: 'MathematicsElementaryTeachers8th',
            isbn13: '9780470105832',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MathematicsElementaryTeachers8th',
                '2-CODE-MathematicsElementaryTeachers8th'

            ]

        },
        {
            id: 125,
            title: 'MechanicsMaterials6th',
            isbn13: '047170511X',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MechanicsMaterials6th',
                '2-CODE-MechanicsMaterials6th'

            ]

        },
        {
            id: 126,
            title: 'MechanicsMaterials6th',
            isbn13: '9780471705116',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MechanicsMaterials6th',
                '2-CODE-MechanicsMaterials6th'

            ]

        },
        {
            id: 127,
            title: 'MicrobiologyPrinciplesExplorations6th',
            isbn13: '9780471420842',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MicrobiologyPrinciplesExplorations6th',
                '2-CODE-MicrobiologyPrinciplesExplorations6th'

            ]

        },
        {
            id: 128,
            title: 'ModernAuditingAssuranceServices8th',
            isbn13: '9780471230113',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ModernAuditingAssuranceServices8th',
                '2-CODE-ModernAuditingAssuranceServices8th'

            ]

        },
        {
            id: 129,
            title: 'OperationsManagement',
            isbn13: '9780471347248',
            config: 'HIGHERED',
            codes: [

                '1-CODE-OperationsManagement',
                '2-CODE-OperationsManagement'

            ]

        },
        {
            id: 130,
            title: 'OrganizationalBehavior8th',
            isbn13: '9780471203674',
            config: 'HIGHERED',
            codes: [

                '1-CODE-OrganizationalBehavior8th',
                '2-CODE-OrganizationalBehavior8th'

            ]

        },
        {
            id: 131,
            title: 'PhysicalGeographyHumanEnvironment3rd',
            isbn13: '9780471480532',
            config: 'HIGHERED',
            codes: [

                '1-CODE-PhysicalGeographyHumanEnvironment3rd',
                '2-CODE-PhysicalGeographyHumanEnvironment3rd'

            ]

        },
        {
            id: 132,
            title: 'PhysicalChemistry4th',
            isbn13: '9780471215042',
            config: 'HIGHERED',
            codes: [

                '1-CODE-PhysicalChemistry4th',
                '2-CODE-PhysicalChemistry4th'

            ]

        },
        {
            id: 133,
            title: 'PowerAnatomyLabManual',
            isbn13: '9780471445586',
            config: 'HIGHERED',
            codes: [

                '1-CODE-PowerAnatomyLabManual',
                '2-CODE-PowerAnatomyLabManual'

            ]

        },
        {
            id: 134,
            title: 'PowerPhysCD',
            isbn13: '9780471662891',
            config: 'HIGHERED',
            codes: [

                '1-CODE-PowerPhysCD',
                '2-CODE-PowerPhysCD'

            ]

        },
        {
            id: 135,
            title: 'PrinciplesAnatomyPhysiology12th',
            isbn13: '9780470084717',
            config: 'HIGHERED',
            codes: [

                '1-CODE-PrinciplesAnatomyPhysiology12th',
                '2-CODE-PrinciplesAnatomyPhysiology12th'

            ]

        },
        {
            id: 136,
            title: 'PrinciplesHumanAnatomy10th',
            isbn13: '9780471420811',
            config: 'HIGHERED',
            codes: [

                '1-CODE-PrinciplesHumanAnatomy10th',
                '2-CODE-PrinciplesHumanAnatomy10th'

            ]

        },
        {
            id: 137,
            title: 'ProjectManagement',
            isbn13: '9780471715375',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ProjectManagement',
                '2-CODE-ProjectManagement'

            ]

        },
        {
            id: 138,
            title: 'SoilMechanicsLabManual',
            isbn13: '9780471788300',
            config: 'HIGHERED',
            codes: [

                '1-CODE-SoilMechanicsLabManual',
                '2-CODE-SoilMechanicsLabManual'

            ]

        },
        {
            id: 139,
            title: 'StaticsAnalysisDesignSystems',
            isbn13: '9780471372998',
            config: 'HIGHERED',
            codes: [

                '1-CODE-StaticsAnalysisDesignSystems',
                '2-CODE-StaticsAnalysisDesignSystems'

            ]

        },
        {
            id: 140,
            title: 'TheEarthThroughTime8th',
            isbn13: '9780471697435',
            config: 'HIGHERED',
            codes: [

                '1-CODE-TheEarthThroughTime8th',
                '2-CODE-TheEarthThroughTime8th'

            ]

        },
        {
            id: 141,
            title: 'TheoryDesignMechanicalMeasurements4th',
            isbn13: '9780471445937',
            config: 'HIGHERED',
            codes: [

                '1-CODE-TheoryDesignMechanicalMeasurements4th',
                '2-CODE-TheoryDesignMechanicalMeasurements4th'

            ]

        },
        {
            id: 142,
            title: 'ThermodynamicsAnIntegratedLearningSystem',
            isbn13: '9780471143437',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ThermodynamicsAnIntegratedLearningSystem',
                '2-CODE-ThermodynamicsAnIntegratedLearningSystem'

            ]

        },
        {
            id: 143,
            title: 'UsingMicrosoftOffice2003Tutorials',
            isbn13: '9780470046395',
            config: 'HIGHERED',
            codes: [

                '1-CODE-UsingMicrosoftOffice2003Tutorials',
                '2-CODE-UsingMicrosoftOffice2003Tutorials'

            ]

        },
        {
            id: 144,
            title: 'VisualizingEnvironmentalScience1st',
            isbn13: '9780471697022',
            config: 'HIGHERED',
            codes: [

                '1-CODE-VisualizingEnvironmentalScience1st',
                '2-CODE-VisualizingEnvironmentalScience1st'

            ]

        },
        {
            id: 145,
            title: 'VisualizingHumanBiology',
            isbn13: '9780471689324',
            config: 'HIGHERED',
            codes: [

                '1-CODE-VisualizingHumanBiology',
                '2-CODE-VisualizingHumanBiology'

            ]

        },
        {
            id: 146,
            title: 'VisualizingGeology',
            isbn13: '9780471747277',
            config: 'HIGHERED',
            codes: [

                '1-CODE-VisualizingGeology',
                '2-CODE-VisualizingGeology'

            ]

        },
        {
            id: 147,
            title: 'VisualizingPhysicalGeography',
            isbn13: '9780470095720',
            config: 'HIGHERED',
            codes: [

                '1-CODE-VisualizingPhysicalGeography',
                '2-CODE-VisualizingPhysicalGeography'

            ]

        },
        {
            id: 148,
            title: 'VisualizingPsychology',
            isbn13: '9780471767961',
            config: 'HIGHERED',
            codes: [

                '1-CODE-VisualizingPsychology',
                '2-CODE-VisualizingPsychology'

            ]

        },
        {
            id: 149,
            title: 'WebApplicationsConcepts',
            isbn13: '9780471204589',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WebApplicationsConcepts',
                '2-CODE-WebApplicationsConcepts'

            ]

        },
        {
            id: 150,
            title: 'JustAsk ControlSystems',
            isbn13: '0471445770',
            config: 'HIGHERED',
            codes: [

                '1-CODE-JustAsk ControlSystems',
                '2-CODE-JustAsk ControlSystems'

            ]

        },
        {
            id: 151,
            title: 'AnatomyPhysiologyManualTherapies1st',
            isbn13: '9780470044964',
            config: 'HIGHERED',
            codes: [

                '1-CODE-AnatomyPhysiologyManualTherapies1st',
                '2-CODE-AnatomyPhysiologyManualTherapies1st'

            ]

        },
        {
            id: 152,
            title: 'HelpingChildrenLearnMathematics9th',
            isbn13: '9780470403068',
            config: 'HIGHERED',
            codes: [

                '1-CODE-HelpingChildrenLearnMathematics9th',
                '2-CODE-HelpingChildrenLearnMathematics9th'

            ]

        },
        {
            id: 153,
            title: 'ContemporaryBusiness13th',
            isbn13: '9780470433683',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ContemporaryBusiness13th',
                '2-CODE-ContemporaryBusiness13th'

            ]

        },
        {
            id: 154,
            title: 'ProductProcessDesignPrinciplesSynthesisAnalysisDesign3rd',
            isbn13: '9780470048955',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ProductProcessDesignPrinciplesSynthesisAnalysisDesign3rd',
                '2-CODE-ProductProcessDesignPrinciplesSynthesisAnalysisDesign3rd'

            ]

        },
        {
            id: 155,
            title: 'FundamentalsFluidMechanics6th',
            isbn13: '9780470262849',
            config: 'HIGHERED',
            codes: [

                '1-CODE-FundamentalsFluidMechanics6th',
                '2-CODE-FundamentalsFluidMechanics6th'

            ]

        },
        {
            id: 156,
            title: 'BecauseTeachingMatters2nd',
            isbn13: '9780470408209',
            config: 'HIGHERED',
            codes: [

                '1-CODE-BecauseTeachingMatters2nd',
                '2-CODE-BecauseTeachingMatters2nd'

            ]

        },
        {
            id: 157,
            title: 'OnlineSub 1001AlgebraIPracticeProblemsFD',
            isbn13: '9781118675557',
            config: 'HIGHERED',
            codes: [

                '1-CODE-OnlineSub 1001AlgebraIPracticeProblemsFD',
                '2-CODE-OnlineSub 1001AlgebraIPracticeProblemsFD'

            ]

        },
        {
            id: 158,
            title: 'Print 1001AlgebraIIPracticeProblemsFD',
            isbn13: '97811184746621',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Print 1001AlgebraIIPracticeProblemsFD',
                '2-CODE-Print 1001AlgebraIIPracticeProblemsFD'

            ]

        },
        {
            id: 159,
            title: 'eBook 1001AlgebraIIPracticeProblemsFD',
            isbn13: '9781118446584',
            config: 'HIGHERED',
            codes: [

                '1-CODE-eBook 1001AlgebraIIPracticeProblemsFD',
                '2-CODE-eBook 1001AlgebraIIPracticeProblemsFD'

            ]

        },
        {
            id: 160,
            title: 'AIA2007',
            isbn13: '9780470251669',
            config: 'HIGHERED',
            codes: [

                '1-CODE-AIA2007',
                '2-CODE-AIA2007'

            ]

        },
        {
            id: 161,
            title: 'LGSv1',
            isbn13: '9780470379370',
            config: 'HIGHERED',
            codes: [

                '1-CODE-LGSv1',
                '2-CODE-LGSv1'

            ]

        },
        {
            id: 162,
            title: 'Valuation 5E',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Valuation 5E',
                '2-CODE-Valuation 5E'

            ]

        },
        {
            id: 163,
            title: 'ConstructionContractAdministration',
            isbn13: '9780470635186',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ConstructionContractAdministration',
                '2-CODE-ConstructionContractAdministration'

            ]

        },
        {
            id: 164,
            title: 'ConstructionSpecifications',
            isbn13: '9780470635209',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ConstructionSpecifications',
                '2-CODE-ConstructionSpecifications'

            ]

        },
        {
            id: 165,
            title: 'ProjectDelivery',
            isbn13: '9780470635193',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ProjectDelivery',
                '2-CODE-ProjectDelivery'

            ]

        },
        {
            id: 166,
            title: 'TheLawofTaxExempt Organizations10th',
            config: 'HIGHERED',
            codes: [

                '1-CODE-TheLawofTaxExempt Organizations10th',
                '2-CODE-TheLawofTaxExempt Organizations10th'

            ]

        },
        {
            id: 167,
            title: 'GoogleCoupon',
            config: 'HIGHERED',
            codes: [

                '1-CODE-GoogleCoupon',
                '2-CODE-GoogleCoupon'

            ]

        },
        {
            id: 168,
            title: 'Office 2010 eLearning Kit FD',
            isbn13: '9781118029725',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Office 2010 eLearning Kit FD',
                '2-CODE-Office 2010 eLearning Kit FD'

            ]

        },
        {
            id: 169,
            title: 'Excel 2010 eLearning Kit FD',
            isbn13: '9781118110799',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Excel 2010 eLearning Kit FD',
                '2-CODE-Excel 2010 eLearning Kit FD'

            ]

        },
        {
            id: 170,
            title: 'Windows 7 eLearning Kit FD',
            isbn13: '9781118031599',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Windows 7 eLearning Kit FD',
                '2-CODE-Windows 7 eLearning Kit FD'

            ]

        },
        {
            id: 171,
            title: 'CPA 2012 AUD',
            isbn13: '9785ECPA00069',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CPA 2012 AUD',
                '2-CODE-CPA 2012 AUD'

            ]

        },
        {
            id: 172,
            title: 'CPA 2012 FAR',
            isbn13: '9785ECPA00083',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CPA 2012 FAR',
                '2-CODE-CPA 2012 FAR'

            ]

        },
        {
            id: 173,
            title: 'RTRP Online TestBank',
            isbn13: '9781118036570',
            config: 'HIGHERED',
            codes: [

                '1-CODE-RTRP Online TestBank',
                '2-CODE-RTRP Online TestBank'

            ]

        },
        {
            id: 174,
            title: 'WileyGAAP2013',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WileyGAAP2013',
                '2-CODE-WileyGAAP2013'

            ]

        },
        {
            id: 175,
            title: 'Wiley Wilmott Summit',
            isbn13: '9781118511015',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Wiley Wilmott Summit',
                '2-CODE-Wiley Wilmott Summit'

            ]

        },
        {
            id: 176,
            title: 'IFRS2012',
            isbn13: '9781118221327',
            config: 'HIGHERED',
            codes: [

                '1-CODE-IFRS2012',
                '2-CODE-IFRS2012'

            ]

        },
        {
            id: 177,
            title: 'TPandC for Tax Exempt Orgs 5E',
            isbn13: '9780470903445',
            config: 'HIGHERED',
            codes: [

                '1-CODE-TPandC for Tax Exempt Orgs 5E',
                '2-CODE-TPandC for Tax Exempt Orgs 5E'

            ]

        },
        {
            id: 178,
            title: 'RGS CD',
            config: 'HIGHERED',
            codes: [

                '1-CODE-RGS CD',
                '2-CODE-RGS CD'

            ]

        },
        {
            id: 179,
            title: 'TheOfficialGuideGMATReview13th',
            isbn13: '9781118109793',
            config: 'HIGHERED',
            codes: [

                '1-CODE-TheOfficialGuideGMATReview13th',
                '2-CODE-TheOfficialGuideGMATReview13th'

            ]

        },
        {
            id: 180,
            title: 'CCNA eTestPrep 640 802',
            isbn13: '9781118271766',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CCNA eTestPrep 640 802',
                '2-CODE-CCNA eTestPrep 640 802'

            ]

        },
        {
            id: 181,
            title: 'CompTIA Network eTestPrep N10 005',
            isbn13: '9781118271773',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CompTIA Network eTestPrep N10 005',
                '2-CODE-CompTIA Network eTestPrep N10 005'

            ]

        },
        {
            id: 182,
            title: 'CompTIA Security eTestPrep SY0 301',
            isbn13: '9781118271780',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CompTIA Security eTestPrep SY0 301',
                '2-CODE-CompTIA Security eTestPrep SY0 301'

            ]

        },
        {
            id: 183,
            title: 'Windows8eLearningKitForDummies',
            isbn13: '9781118202876',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Windows8eLearningKitForDummies',
                '2-CODE-Windows8eLearningKitForDummies'

            ]

        },
        {
            id: 184,
            title: 'BeginningWindows8AppDev',
            isbn13: '9781118012680',
            config: 'HIGHERED',
            codes: [

                '1-CODE-BeginningWindows8AppDev',
                '2-CODE-BeginningWindows8AppDev'

            ]

        },
        {
            id: 185,
            title: 'CCNA Virtual Lab2',
            isbn13: '9780470392591',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CCNA Virtual Lab2',
                '2-CODE-CCNA Virtual Lab2'

            ]

        },
        {
            id: 186,
            title: 'CCNA Virtual Lab3',
            isbn13: '9781118431993',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CCNA Virtual Lab3',
                '2-CODE-CCNA Virtual Lab3'

            ]

        },
        {
            id: 187,
            title: 'CCENT Virtual Lab1',
            isbn13: '9781118435243',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CCENT Virtual Lab1',
                '2-CODE-CCENT Virtual Lab1'

            ]

        },
        {
            id: 188,
            title: 'Exploring Leadership StrengthsQuest',
            isbn13: '9781118417485',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Exploring Leadership StrengthsQuest',
                '2-CODE-Exploring Leadership StrengthsQuest'

            ]

        },
        {
            id: 189,
            title: 'Family Wealth Sustainability',
            isbn13: '9781118345863',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Family Wealth Sustainability',
                '2-CODE-Family Wealth Sustainability'

            ]

        },
        {
            id: 190,
            title: 'CompTIA Aplus eTestPrep',
            isbn13: '9781118388419',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CompTIA Aplus eTestPrep',
                '2-CODE-CompTIA Aplus eTestPrep'

            ]

        },
        {
            id: 191,
            title: 'PHR SPHR eTestPrep',
            isbn13: '9781118469699',
            config: 'HIGHERED',
            codes: [

                '1-CODE-PHR SPHR eTestPrep',
                '2-CODE-PHR SPHR eTestPrep'

            ]

        },
        {
            id: 192,
            title: 'AHAProfessionalPractice14thEdition',
            isbn13: '9780470009574',
            config: 'HIGHERED',
            codes: [

                '1-CODE-AHAProfessionalPractice14thEdition',
                '2-CODE-AHAProfessionalPractice14thEdition'

            ]

        },
        {
            id: 193,
            title: 'WileyCIATestBankCompleteSetCD',
            isbn13: '9781118550984',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WileyCIATestBankCompleteSetCD',
                '2-CODE-WileyCIATestBankCompleteSetCD'

            ]

        },
        {
            id: 194,
            title: 'CMA CD Intensive Review Complete',
            isbn13: '9781118481509',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CMA CD Intensive Review Complete',
                '2-CODE-CMA CD Intensive Review Complete'

            ]

        },
        {
            id: 195,
            title: 'CMA Exam Review Part1',
            isbn13: '9781118480588',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CMA Exam Review Part1',
                '2-CODE-CMA Exam Review Part1'

            ]

        },
        {
            id: 196,
            title: 'CMA Exam Review Part2',
            isbn13: '9781118480571',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CMA Exam Review Part2',
                '2-CODE-CMA Exam Review Part2'

            ]

        },
        {
            id: 197,
            title: 'CMA Exam Review Complete',
            isbn13: '9781118480601',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CMA Exam Review Complete',
                '2-CODE-CMA Exam Review Complete'

            ]

        },
        {
            id: 198,
            title: 'CMA CD Intensive Review Part1',
            isbn13: '9781118481523',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CMA CD Intensive Review Part1',
                '2-CODE-CMA CD Intensive Review Part1'

            ]

        },
        {
            id: 199,
            title: 'CMA CD Intensive Review Part2',
            isbn13: '9781118481493',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CMA CD Intensive Review Part2',
                '2-CODE-CMA CD Intensive Review Part2'

            ]

        },
        {
            id: 200,
            title: 'CMA Intensive Review Part1',
            isbn13: '9781118480687',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CMA Intensive Review Part1',
                '2-CODE-CMA Intensive Review Part1'

            ]

        },
        {
            id: 201,
            title: 'CMA Intensive Review Part2',
            isbn13: '9781118480700',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CMA Intensive Review Part2',
                '2-CODE-CMA Intensive Review Part2'

            ]

        },
        {
            id: 202,
            title: 'CMA Intensive Review Complete',
            isbn13: '9781118480663',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CMA Intensive Review Complete',
                '2-CODE-CMA Intensive Review Complete'

            ]

        },
        {
            id: 203,
            title: 'WILEY IFRS 2013',
            isbn13: '9781118419793',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WILEY IFRS 2013',
                '2-CODE-WILEY IFRS 2013'

            ]

        },
        {
            id: 204,
            title: 'Architects Handbook Pro Practice 14e',
            isbn13: '9780470009574',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Architects Handbook Pro Practice 14e',
                '2-CODE-Architects Handbook Pro Practice 14e'

            ]

        },
        {
            id: 205,
            title: 'eBook 1001BasicMathPreAlgePracProbFD',
            isbn13: '9781118446546',
            config: 'HIGHERED',
            codes: [

                '1-CODE-eBook 1001BasicMathPreAlgePracProbFD',
                '2-CODE-eBook 1001BasicMathPreAlgePracProbFD'

            ]

        },
        {
            id: 206,
            title: 'Online 1001BasMathPreAlgePracProbFD',
            isbn13: '9781118677421',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Online 1001BasMathPreAlgePracProbFD',
                '2-CODE-Online 1001BasMathPreAlgePracProbFD'

            ]

        },
        {
            id: 207,
            title: 'Print ASVAB FDPremierPlus',
            isbn13: '9781118525531',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Print ASVAB FDPremierPlus',
                '2-CODE-Print ASVAB FDPremierPlus'

            ]

        },
        {
            id: 208,
            title: 'AvoidingOptionTradingTraps2ndEdition',
            isbn13: '9781118633571',
            config: 'HIGHERED',
            codes: [

                '1-CODE-AvoidingOptionTradingTraps2ndEdition',
                '2-CODE-AvoidingOptionTradingTraps2ndEdition'

            ]

        },
        {
            id: 209,
            title: 'Architect Handbook Pro Practice',
            isbn13: '978111308820',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Architect Handbook Pro Practice',
                '2-CODE-Architect Handbook Pro Practice'

            ]

        },
        {
            id: 210,
            title: 'CSI Sustainable Design and Constr',
            isbn13: '9781118078556',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CSI Sustainable Design and Constr',
                '2-CODE-CSI Sustainable Design and Constr'

            ]

        },
        {
            id: 211,
            title: 'Office 2013 eLearning',
            isbn13: '9781118490327',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Office 2013 eLearning',
                '2-CODE-Office 2013 eLearning'

            ]

        },
        {
            id: 212,
            title: 'Dummies 1001 CCNA Routing Switching',
            isbn13: '9781118794296',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Dummies 1001 CCNA Routing Switching',
                '2-CODE-Dummies 1001 CCNA Routing Switching'

            ]

        },
        {
            id: 213,
            title: 'Dummies 1001 Calculus Prac Quest',
            isbn13: '9781118496718',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Dummies 1001 Calculus Prac Quest',
                '2-CODE-Dummies 1001 Calculus Prac Quest'

            ]

        },
        {
            id: 214,
            title: 'Java eLearning Kit FD',
            isbn13: '9781118098783',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Java eLearning Kit FD',
                '2-CODE-Java eLearning Kit FD'

            ]

        },
        {
            id: 215,
            title: 'Off Guide for GMAT Review 2015',
            isbn13: '9781118914090',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Off Guide for GMAT Review 2015',
                '2-CODE-Off Guide for GMAT Review 2015'

            ]

        },
        {
            id: 216,
            title: 'OfficialGuideGMATReview2015',
            isbn13: '9781118914090',
            config: 'HIGHERED',
            codes: [

                '1-CODE-OfficialGuideGMATReview2015',
                '2-CODE-OfficialGuideGMATReview2015'

            ]

        },
        {
            id: 217,
            title: 'OfficialGuideGMATVerbal2015',
            isbn13: '9781118914182',
            config: 'HIGHERED',
            codes: [

                '1-CODE-OfficialGuideGMATVerbal2015',
                '2-CODE-OfficialGuideGMATVerbal2015'

            ]

        },
        {
            id: 218,
            title: 'OfficialGuideGMATQuantitative2015',
            isbn13: '9781118914144',
            config: 'HIGHERED',
            codes: [

                '1-CODE-OfficialGuideGMATQuantitative2015',
                '2-CODE-OfficialGuideGMATQuantitative2015'

            ]

        },
        {
            id: 219,
            title: 'TheInteriorDesignProductivityToolbox',
            isbn13: '9781118680438',
            config: 'HIGHERED',
            codes: [

                '1-CODE-TheInteriorDesignProductivityToolbox',
                '2-CODE-TheInteriorDesignProductivityToolbox'

            ]

        },
        {
            id: 220,
            title: 'SunWindLightArch3rd',
            isbn13: '9780470945780',
            config: 'HIGHERED',
            codes: [

                '1-CODE-SunWindLightArch3rd',
                '2-CODE-SunWindLightArch3rd'

            ]

        },
        {
            id: 221,
            title: 'WS3ExamReview2015TestBank',
            isbn13: '9781118939970',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS3ExamReview2015TestBank',
                '2-CODE-WS3ExamReview2015TestBank'

            ]

        },
        {
            id: 222,
            title: 'WS6ExamReview2015TestBank',
            isbn13: '9781118857045',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS6ExamReview2015TestBank',
                '2-CODE-WS6ExamReview2015TestBank'

            ]

        },
        {
            id: 223,
            title: 'WS7ExamReview2015TestBank',
            isbn13: '9781118856857',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS7ExamReview2015TestBank',
                '2-CODE-WS7ExamReview2015TestBank'

            ]

        },
        {
            id: 224,
            title: 'WS9ExamReview2015TestBank',
            isbn13: '9781118857113',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS9ExamReview2015TestBank',
                '2-CODE-WS9ExamReview2015TestBank'

            ]

        },
        {
            id: 225,
            title: 'WS10ExamReview2015TestBank',
            isbn13: '9781118856956',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS10ExamReview2015TestBank',
                '2-CODE-WS10ExamReview2015TestBank'

            ]

        },
        {
            id: 226,
            title: 'WS24ExamReview2015TestBank',
            isbn13: '9781118856925',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS24ExamReview2015TestBank',
                '2-CODE-WS24ExamReview2015TestBank'

            ]

        },
        {
            id: 227,
            title: 'WS26ExamReview2015TestBank',
            isbn13: '9781118856741',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS26ExamReview2015TestBank',
                '2-CODE-WS26ExamReview2015TestBank'

            ]

        },
        {
            id: 228,
            title: 'WS55ExamReview2015TestBank',
            isbn13: '9781118856987',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS55ExamReview2015TestBank',
                '2-CODE-WS55ExamReview2015TestBank'

            ]

        },
        {
            id: 229,
            title: 'WS62ExamReview2015TestBank',
            isbn13: '9781118857168',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS62ExamReview2015TestBank',
                '2-CODE-WS62ExamReview2015TestBank'

            ]

        },
        {
            id: 230,
            title: 'WS63ExamReview2015TestBank',
            isbn13: '9781118857052',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS63ExamReview2015TestBank',
                '2-CODE-WS63ExamReview2015TestBank'

            ]

        },
        {
            id: 231,
            title: 'WS65ExamReview2015TestBank',
            isbn13: '9781118857069',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS65ExamReview2015TestBank',
                '2-CODE-WS65ExamReview2015TestBank'

            ]

        },
        {
            id: 232,
            title: 'WS66ExamReview2015TestBank',
            isbn13: '9781118857144',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS66ExamReview2015TestBank',
                '2-CODE-WS66ExamReview2015TestBank'

            ]

        },
        {
            id: 233,
            title: 'WS99ExamReview2015TestBank',
            isbn13: '9781118857311',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS99ExamReview2015TestBank',
                '2-CODE-WS99ExamReview2015TestBank'

            ]

        },
        {
            id: 234,
            title: 'CPA 2012 BEC',
            isbn13: '9785ECPA00076',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CPA 2012 BEC',
                '2-CODE-CPA 2012 BEC'

            ]

        },
        {
            id: 235,
            title: 'CPA 2012 REG',
            isbn13: '9785ECPA00090',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CPA 2012 REG',
                '2-CODE-CPA 2012 REG'

            ]

        },
        {
            id: 236,
            title: 'CPA 2012 Complete Set',
            isbn13: '9780470621905',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CPA 2012 Complete Set',
                '2-CODE-CPA 2012 Complete Set'

            ]

        },
        {
            id: 237,
            title: 'Print 1001AlgebraIPracticeProblemsFD',
            isbn13: '9781118446713',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Print 1001AlgebraIPracticeProblemsFD',
                '2-CODE-Print 1001AlgebraIPracticeProblemsFD'

            ]

        },
        {
            id: 238,
            title: 'Dummies 1001 Grammer Prac Quest',
            isbn13: '9781118745014',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Dummies 1001 Grammer Prac Quest',
                '2-CODE-Dummies 1001 Grammer Prac Quest'

            ]

        },
        {
            id: 239,
            title: 'WS4ExamReview2015TestBank',
            isbn13: '9781118857014',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS4ExamReview2015TestBank',
                '2-CODE-WS4ExamReview2015TestBank'

            ]

        },
        {
            id: 240,
            title: 'eBook 1001AlgebraIPracticeProblemsFD',
            isbn13: '9781118446669',
            config: 'HIGHERED',
            codes: [

                '1-CODE-eBook 1001AlgebraIPracticeProblemsFD',
                '2-CODE-eBook 1001AlgebraIPracticeProblemsFD'

            ]

        },
        {
            id: 241,
            title: 'Print 1001BasicMathPreAlgePracProbFD',
            isbn13: '9781118446560',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Print 1001BasicMathPreAlgePracProbFD',
                '2-CODE-Print 1001BasicMathPreAlgePracProbFD'

            ]

        },
        {
            id: 242,
            title: 'WS6ExamReview2013TestBank',
            isbn13: '9781118671085',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS6ExamReview2013TestBank',
                '2-CODE-WS6ExamReview2013TestBank'

            ]

        },
        {
            id: 243,
            title: 'WS7ExamReview2013TestBank',
            isbn13: '9781118672709',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS7ExamReview2013TestBank',
                '2-CODE-WS7ExamReview2013TestBank'

            ]

        },
        {
            id: 244,
            title: 'WS65ExamReview2013TestBank',
            isbn13: '9781118671108',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS65ExamReview2013TestBank',
                '2-CODE-WS65ExamReview2013TestBank'

            ]

        },
        {
            id: 245,
            title: 'WS4ExamReview2013TestBank',
            isbn13: '9781118671030',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS4ExamReview2013TestBank',
                '2-CODE-WS4ExamReview2013TestBank'

            ]

        },
        {
            id: 246,
            title: 'WS24ExamReview2013TestBank',
            isbn13: '9781118672532',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS24ExamReview2013TestBank',
                '2-CODE-WS24ExamReview2013TestBank'

            ]

        },
        {
            id: 247,
            title: 'WS63ExamReview2013TestBank',
            isbn13: '9781118671184',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS63ExamReview2013TestBank',
                '2-CODE-WS63ExamReview2013TestBank'

            ]

        },
        {
            id: 248,
            title: 'WS66ExamReview2013TestBank',
            isbn13: '9781118671122',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS66ExamReview2013TestBank',
                '2-CODE-WS66ExamReview2013TestBank'

            ]

        },
        {
            id: 249,
            title: 'WS55ExamReview2013TestBank',
            isbn13: '9781118672594',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS55ExamReview2013TestBank',
                '2-CODE-WS55ExamReview2013TestBank'

            ]

        },
        {
            id: 250,
            title: 'WS62ExamReview2013TestBank',
            isbn13: '9781118671207',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS62ExamReview2013TestBank',
                '2-CODE-WS62ExamReview2013TestBank'

            ]

        },
        {
            id: 251,
            title: 'WS99ExamReview2013TestBank',
            isbn13: '9781118670972',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS99ExamReview2013TestBank',
                '2-CODE-WS99ExamReview2013TestBank'

            ]

        },
        {
            id: 252,
            title: 'WS9ExamReview2013TestBank',
            isbn13: '9781118671115',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS9ExamReview2013TestBank',
                '2-CODE-WS9ExamReview2013TestBank'

            ]

        },
        {
            id: 253,
            title: 'WS10ExamReview2013TestBank',
            isbn13: '9781118671146',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS10ExamReview2013TestBank',
                '2-CODE-WS10ExamReview2013TestBank'

            ]

        },
        {
            id: 254,
            title: 'WS26ExamReview2013TestBank',
            isbn13: '9781118671054',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WS26ExamReview2013TestBank',
                '2-CODE-WS26ExamReview2013TestBank'

            ]

        },
        {
            id: 255,
            title: 'Excel 2013 eLearning Kit FD',
            isbn13: '9781118493045',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Excel 2013 eLearning Kit FD',
                '2-CODE-Excel 2013 eLearning Kit FD'

            ]

        },
        {
            id: 256,
            title: 'LSAT For Dummies 2e',
            isbn13: '9781118678237',
            config: 'HIGHERED',
            codes: [

                '1-CODE-LSAT For Dummies 2e',
                '2-CODE-LSAT For Dummies 2e'

            ]

        },
        {
            id: 257,
            title: 'AGSCD',
            config: 'HIGHERED',
            codes: [

                '1-CODE-AGSCD',
                '2-CODE-AGSCD'

            ]

        },
        {
            id: 258,
            title: 'CC4',
            config: 'HIGHERED',
            codes: [

                '1-CODE-CC4',
                '2-CODE-CC4'

            ]

        },
        {
            id: 259,
            title: 'PfeiferLibrary',
            config: 'HIGHERED',
            codes: [

                '1-CODE-PfeiferLibrary',
                '2-CODE-PfeiferLibrary'

            ]

        },
        {
            id: 260,
            title: 'TSE',
            config: 'HIGHERED',
            codes: [

                '1-CODE-TSE',
                '2-CODE-TSE'

            ]

        },
        {
            id: 261,
            title: 'Dummies1001ChemistryPracticeProblems',
            isbn13: '9781118549322',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Dummies1001ChemistryPracticeProblems',
                '2-CODE-Dummies1001ChemistryPracticeProblems'

            ]

        },
        {
            id: 262,
            title: 'Windows8ForDummiesVideos',
            isbn13: '9781118271674',
            config: 'HIGHERED',
            codes: [

                '1-CODE-Windows8ForDummiesVideos',
                '2-CODE-Windows8ForDummiesVideos'

            ]

        },
        {
            id: 263,
            title: 'HoltEssentialEndocrinology',
            isbn13: '9781444330045',
            config: 'HIGHERED',
            codes: [

                '1-CODE-HoltEssentialEndocrinology',
                '2-CODE-HoltEssentialEndocrinology'

            ]

        },
        {
            id: 264,
            title: 'MRIinPractice4th',
            isbn13: '9781444337433',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MRIinPractice4th',
                '2-CODE-MRIinPractice4th'

            ]

        },
        {
            id: 265,
            title: 'WertheimAtlasHumanInfectiousDisease',
            isbn13: '9781405184403',
            config: 'HIGHERED',
            codes: [

                '1-CODE-WertheimAtlasHumanInfectiousDisease',
                '2-CODE-WertheimAtlasHumanInfectiousDisease'

            ]

        },
        {
            id: 266,
            title: 'TobiasEssentialMedicalGenetics6e',
            isbn13: '9781405169745',
            config: 'HIGHERED',
            codes: [

                '1-CODE-TobiasEssentialMedicalGenetics6e',
                '2-CODE-TobiasEssentialMedicalGenetics6e'

            ]

        },
        {
            id: 267,
            title: 'SompayracHowtheImmuneSystemWorks4e',
            isbn13: '9780470657294',
            config: 'HIGHERED',
            codes: [

                '1-CODE-SompayracHowtheImmuneSystemWorks4e',
                '2-CODE-SompayracHowtheImmuneSystemWorks4e'

            ]

        },
        {
            id: 268,
            title: 'HoffbrandEssentialHaematology6e',
            isbn13: '9781405198905',
            config: 'HIGHERED',
            codes: [

                '1-CODE-HoffbrandEssentialHaematology6e',
                '2-CODE-HoffbrandEssentialHaematology6e'

            ]

        },
        {
            id: 269,
            title: 'RudolfPaediatricsChildHealth3e',
            isbn13: '9781405194747',
            config: 'HIGHERED',
            codes: [

                '1-CODE-RudolfPaediatricsChildHealth3e',
                '2-CODE-RudolfPaediatricsChildHealth3e'

            ]

        },
        {
            id: 270,
            title: 'SinhaEssentialNeonatalMedicine5e',
            isbn13: '9780470670408',
            config: 'HIGHERED',
            codes: [

                '1-CODE-SinhaEssentialNeonatalMedicine5e',
                '2-CODE-SinhaEssentialNeonatalMedicine5e'

            ]

        },
        {
            id: 271,
            title: 'DelvesRoittsEssentialImmunology12e',
            isbn13: '9781405196833',
            config: 'HIGHERED',
            codes: [

                '1-CODE-DelvesRoittsEssentialImmunology12e',
                '2-CODE-DelvesRoittsEssentialImmunology12e'

            ]

        },
        {
            id: 272,
            title: 'SchiffsDiseasesoftheLiver11thEdition',
            isbn13: '9780470654682',
            config: 'HIGHERED',
            codes: [

                '1-CODE-SchiffsDiseasesoftheLiver11thEdition',
                '2-CODE-SchiffsDiseasesoftheLiver11thEdition'

            ]

        },
        {
            id: 273,
            title: 'TextbookofDiabetes4thEdition',
            isbn13: '9781405191814',
            config: 'HIGHERED',
            codes: [

                '1-CODE-TextbookofDiabetes4thEdition',
                '2-CODE-TextbookofDiabetes4thEdition'

            ]

        },
        {
            id: 274,
            title: 'PrimeronTransplantation3rdEdition',
            isbn13: '9781405142670',
            config: 'HIGHERED',
            codes: [

                '1-CODE-PrimeronTransplantation3rdEdition',
                '2-CODE-PrimeronTransplantation3rdEdition'

            ]

        },
        {
            id: 275,
            title: 'ImplantableDefibrillators',
            isbn13: '9781405186384',
            config: 'HIGHERED',
            codes: [

                '1-CODE-ImplantableDefibrillators',
                '2-CODE-ImplantableDefibrillators'

            ]

        },
        {
            id: 276,
            title: 'MedicineataGlanceCoreCases',
            isbn13: '9781444335118',
            config: 'HIGHERED',
            codes: [

                '1-CODE-MedicineataGlanceCoreCases',
                '2-CODE-MedicineataGlanceCoreCases'

            ]

        },
        {
            id: 277,
            title: 'FundamentalsInfectionPrevention',
            isbn13: '9781118306659',
            config: 'HIGHERED',
            codes: [

                '1-CODE-FundamentalsInfectionPrevention',
                '2-CODE-FundamentalsInfectionPrevention'

            ]

        },
        {
            id: 278,
            title: 'GregorysPediatricAnesthesia5e',
            isbn13: '9781444333466',
            config: 'HIGHERED',
            codes: [

                '1-CODE-GregorysPediatricAnesthesia5e',
                '2-CODE-GregorysPediatricAnesthesia5e'

            ]

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
    var body = req.body;
    console.log(body);
    var newCode = {
        customerName: body.customerName,
        customerEmail: body.customerEmail,
        university: body.university,
        representative: body.representative,
        chatOrTicket: body.chatOrTicket,
        id: body.id,
        date: new Date().toLocaleDateString(),
        code: _.findWhere( products ,{id : parseInt(body.id)}).codes.shift()
    };
    // console.log(products[0].codes);

    res.status(201).send(newCode);
};
