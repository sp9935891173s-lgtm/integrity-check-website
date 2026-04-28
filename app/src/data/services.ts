import {
  Shield, Briefcase, GraduationCap, MapPin, FlaskConical, Users,
  CreditCard, Fingerprint, Globe, Award, Monitor, Database,
  FileText, Building2, Search, Landmark, IndianRupee, UserCheck, Wallet,
  History, Stethoscope, UserCog, Gavel, ShieldAlert, BookOpen
} from 'lucide-react';

export const services = [
  { 
    id: 'address-verification',
    icon: MapPin, 
    title: 'Address Verification', 
    desc: 'Current aur permanent address ki physical aur digital verification field agents aur database ke through.', 
    features: ['Physical Verification', 'Digital Address Check', 'Residence Duration', 'Neighborhood Check'], 
    category: 'Identity',
    longDesc: 'Address verification background check ka ek fundamental part hai. Hamare field agents candidate ke residence pe visit karke family members ya neighbors se identity aur duration of stay verify karte hain. Digital verification ke liye hum GPS-tagged images aur digital signatures ka use karte hain.',
    process: [
      'Digital address validation against government databases.',
      'Field agent visit to the physical location.',
      'Verification of residence duration with neighbors/family.',
      'GPS-tagged photographic evidence collection.',
      'Final report generation with risk assessment.'
    ],
    documents: ['Aadhaar Card', 'Voter ID', 'Electricity Bill / Rent Agreement'],
    tat: '2-4 Business Days'
  },
  { 
    id: 'aadhaar-verification',
    icon: Fingerprint, 
    title: 'Aadhaar Verification', 
    desc: 'UIDAI database se Aadhaar card ki authenticity aur details verify karna.', 
    features: ['UIDAI Database Check', 'Name & DOB Match', 'Address Confirmation', 'Biometric Link'], 
    category: 'Identity',
    longDesc: 'Aadhaar verification digital identity confirmation ka gold standard hai. Hum UIDAI APIs ka use karke real-time mein Aadhaar authenticity verify karte hain, ensuring ki document tampered nahi hai aur details records se match karti hain.',
    process: [
      'Collection of Aadhaar number and demographic details.',
      'Real-time API call to UIDAI database.',
      'Matching of Name, DOB, Gender and Address.',
      'OTP-based or biometric authentication (if required).',
      'Instant verification report.'
    ],
    documents: ['Aadhaar Card Number / Scanned Copy'],
    tat: 'Instant'
  },
  { 
    id: 'passport-verification',
    icon: BookOpen, 
    title: 'Passport Verification', 
    desc: 'Passport details ki authentication aur validity check Ministry of External Affairs records ke through.', 
    features: ['Passport Number Match', 'Validity Status', 'Issue Place Check', 'Database Verification'], 
    category: 'Identity',
    longDesc: 'International travel aur global hiring ke liye passport verification essential hai. Hum Ministry of External Affairs ke records access karke passport ki validity aur authenticity check karte hain.',
    process: [
      'Verification of Passport Number.',
      'Validity and Expiry check.',
      'Issue date and place confirmation.',
      'Global database screening for travel restrictions.'
    ],
    documents: ['Passport Copy'],
    tat: '1-2 Business Days'
  },
  { 
    id: 'bank-account-verification',
    icon: Wallet, 
    title: 'Bank Account Verification', 
    desc: 'Bank account details aur ownership verify karna — fraud prevention ke liye.', 
    features: ['Account Existence Check', 'Owner Name Match', 'IFSC Verification', 'Active Status'], 
    category: 'Financial',
    longDesc: 'Financial transactions aur payroll processing ke liye correct bank details hona zaroori hai. Hum penny-drop method ya bank API se account holder ka name aur account status verify karte hain.',
    process: [
      'Penny-drop transaction to verify account.',
      'Real-time name match from bank records.',
      'IFSC and Branch verification.',
      'Verification of account active/inactive status.'
    ],
    documents: ['Cancelled Cheque / Bank Statement'],
    tat: 'Instant / 1 Business Day'
  },
  { 
    id: 'civil-court-record-check',
    icon: Landmark, 
    title: 'Civil Court Record Check', 
    desc: 'Civil cases, disputes, litigations aur pending court matters ki comprehensive check.', 
    features: ['Civil Case Search', 'Dispute Records', 'Litigation History', 'Pending Cases'], 
    category: 'Criminal',
    longDesc: 'Civil litigation check se candidate ke financial disputes, property cases ya employment-related lawsuits ka pata chalta hai. Hum High Courts, District Courts aur Tribunals ke records search karte hain.',
    process: [
      'Search across Pan-India court databases.',
      'Analysis of litigation history.',
      'Verification of case status (Pending/Closed).',
      'Detail extraction of the nature of dispute.'
    ],
    documents: ['Candidate Identity Proof'],
    tat: '3-5 Business Days'
  },
  { 
    id: 'credit-check',
    icon: CreditCard, 
    title: 'Credit Check / CIBIL Check', 
    desc: 'Financial background verification including credit score, loan history, defaults, aur liabilities.', 
    features: ['CIBIL Score Check', 'Loan History', 'Default Verification', 'Financial Liabilities'], 
    category: 'Financial',
    longDesc: 'Financial services aur senior management roles ke liye credit history check bahut important hai. Ye candidate ki financial responsibility aur potential risks ko highlight karta hai.',
    process: [
      'Consent-based credit report retrieval.',
      'Analysis of CIBIL score.',
      'Identification of loan defaults or write-offs.',
      'Review of existing financial liabilities.'
    ],
    documents: ['PAN Card', 'Candidate Consent Form'],
    tat: '1-2 Business Days'
  },
  { 
    id: 'criminal-record-check',
    icon: Shield, 
    title: 'Criminal Record Check', 
    desc: 'Comprehensive court records search, FIR verification, aur criminal history screening across India.', 
    features: ['Court Record Search', 'FIR Verification', 'Pending Cases Check', 'Warrant Search'], 
    category: 'Criminal',
    longDesc: 'Criminal background check workplace safety ensure karne ke liye primary tool hai. Hum digital records (e-courts) aur physical police records verify karte hain.',
    process: [
      'Search in National Crime Records Bureau (NCRB) data.',
      'State-wise court database search.',
      'Analysis of FIRs and pending criminal proceedings.',
      'Verification of warrants or past convictions.'
    ],
    documents: ['Aadhaar Card', 'Address Proof'],
    tat: '3-5 Business Days'
  },
  { 
    id: 'pcc-verification',
    icon: Gavel, 
    title: 'Police Clearance Certificate', 
    desc: 'Police department se character certificate aur criminal record clearance ki verification.', 
    features: ['PCC Validation', 'Local Police Records', 'Clearance Status', 'Authenticity Check'], 
    category: 'Criminal',
    longDesc: 'PCC ek official document hai jo police department issue karta hai. Hum is certificate ki authenticity verify karte hain taaki document tampering ka koi risk na rahe.',
    process: [
      'Submission of PCC application (if assisted).',
      'Verification of issued PCC from the police portal.',
      'Cross-check with local police station records.',
      'Validity and seal authentication.'
    ],
    documents: ['PCC Copy', 'Passport/Aadhaar'],
    tat: '7-15 Business Days (for issuance) / 2 Days (for verification)'
  },
  { 
    id: 'watchlist-check',
    icon: Database, 
    title: 'Database & Watchlist Check', 
    desc: 'Global terror watchlists, sanctions lists, PEP databases, aur criminal registries ke against screening.', 
    features: ['Terror Watchlist', 'Sanctions Screening', 'PEP Database', 'Criminal Registry'], 
    category: 'Criminal',
    longDesc: 'Hum candidates ko global databases jaise OFAC, Interpol, UN Sanctions, aur domestic databases (CBI, SEBI) ke against screen karte hain.',
    process: [
      'Screening against 1000+ global watchlists.',
      'Politically Exposed Persons (PEP) check.',
      'Anti-Money Laundering (AML) list verification.',
      'Negative media and news screening.'
    ],
    documents: ['Full Name', 'DOB', 'Identity Proof'],
    tat: '1-2 Business Days'
  },
  { 
    id: 'global-database-check',
    icon: Globe, 
    title: 'Global Database Check', 
    desc: 'International sanctions, watchlists aur criminal databases ke across candidate screening.', 
    features: ['Sanctions Lists', 'Global Watchlists', 'Anti-Money Laundering', 'International Records'], 
    category: 'Global',
    longDesc: 'Global database check ensures ki candidate ka koi international criminal record ya sanction involvement nahi hai.',
    process: [
      'International sanctions list search.',
      'Global regulatory database check.',
      'International criminal registry screening.',
      'Sanctioned countries check.'
    ],
    documents: ['Passport Copy', 'Candidate Consent'],
    tat: '2-3 Business Days'
  },
  { 
    id: 'drug-alcohol-testing',
    icon: FlaskConical, 
    title: 'Drug & Alcohol Testing', 
    desc: 'Pre-employment aur periodic drug screening NABL-certified laboratories mein chain-of-custody compliance ke saath.', 
    features: ['5-Panel Drug Test', '10-Panel Drug Test', 'Alcohol Screening', 'Lab Reports'], 
    category: 'Health',
    longDesc: 'Workplace safety aur productivity ke liye drug testing zaroori hai. Hum urine, blood ya hair sample analysis ke through screening karte hain.',
    process: [
      'Sample collection at certified labs or onsite.',
      'Chain-of-custody documentation.',
      'Lab analysis for specific panels (5/10/12).',
      'Medical Review Officer (MRO) verification.',
      'Secure report delivery.'
    ],
    documents: ['Identity Proof'],
    tat: '2-3 Business Days'
  },
  { 
    id: 'medical-test',
    icon: Stethoscope, 
    title: 'Pre-Employment Medical Test', 
    desc: 'Candidate ki physical fitness aur health screening job requirement ke according.', 
    features: ['General Checkup', 'Blood Tests', 'Visual/Hearing Test', 'Fitness Certificate'], 
    category: 'Health',
    longDesc: 'Hamari medical screening ensure karti hai ki candidate job ki physical requirements ke liye fit hai.',
    process: [
      'Appointment scheduling at partner hospitals.',
      'Comprehensive physical examination.',
      'Pathological tests (Blood, Urine).',
      'Specialist evaluations (if required).',
      'Fit-for-work certificate issuance.'
    ],
    documents: ['Identity Proof', 'Medical History'],
    tat: '2-3 Business Days'
  },
  { 
    id: 'education-verification',
    icon: GraduationCap, 
    title: 'Education Verification', 
    desc: 'Universities, colleges aur boards se direct verification — degrees, certificates aur academic credentials confirm karna.', 
    features: ['University Verification', 'Degree Authentication', 'Certificate Check', 'Accreditation Status'], 
    category: 'Employment',
    longDesc: 'Education fraud India mein bahut common hai. Hum direct university records, registrar offices, ya National Academic Depository (NAD) se credentials verify karte hain.',
    process: [
      'Verification of University/College accreditation.',
      'Authentication of Degree/Mark-sheets.',
      'Verification of graduation year and roll number.',
      'Direct confirmation from the Registrar/Institution.'
    ],
    documents: ['Final Degree Certificate', 'Mark-sheets'],
    tat: '5-10 Business Days'
  },
  { 
    id: 'alumni-verification',
    icon: Users, 
    title: 'Alumni Verification', 
    desc: 'Educational institutions se alumni status aur graduation details confirm karna.', 
    features: ['Alumni Status Check', 'Batch Confirmation', 'Major/Degree Match', 'Network Validation'], 
    category: 'Employment',
    longDesc: 'Alumni networks ke through education aur batch details verify karna secondary confirmation provide karta hai.',
    process: [
      'Checking college alumni databases.',
      'Networking with batch representatives.',
      'Verifying membership in official alumni associations.'
    ],
    documents: ['Graduation Year', 'Major'],
    tat: '3-5 Business Days'
  },
  { 
    id: 'employment-gap-check',
    icon: History, 
    title: 'Employment Gap Check', 
    desc: 'Work history mein periods of unemployment ya gaps ki thorough investigation aur justification.', 
    features: ['Timeline Analysis', 'Gap Identification', 'Reason Verification', 'Supporting Documents'], 
    category: 'Employment',
    longDesc: 'Unexplained gaps aksar hidden employment ya adverse history indicate karte hain. Hum in gaps ko thoroughly investigate karte hain.',
    process: [
      'Employment timeline mapping.',
      'Identification of gaps > 3 months.',
      'Candidate interview for gap justification.',
      'Verification of supporting evidence (travel, medical, etc.).'
    ],
    documents: ['Resume', 'Declaration Form'],
    tat: '3-5 Business Days'
  },
  { 
    id: 'employment-history-verification',
    icon: Briefcase, 
    title: 'Employment History Verification', 
    desc: 'Past employment ki thorough confirmation — designation, tenure, salary, reason for leaving aur rehire eligibility.', 
    features: ['Tenure Confirmation', 'Designation Check', 'Performance Review', 'Exit Formalities'], 
    category: 'Employment',
    longDesc: 'Ye hamari core service hai. Hum past HR records se employee details verify karte hain taaki experience fraud detect kiya ja sake.',
    process: [
      'Contacting HR departments of previous employers.',
      'Verifying Date of Joining (DOJ) and Date of Leaving (DOL).',
      'Confirming last designation and reason for exit.',
      'Checking for any pending disciplinary actions.'
    ],
    documents: ['Experience Letter', 'Relieving Letter', 'Salary Slips'],
    tat: '3-7 Business Days'
  },
  { 
    id: 'form-26as-verification',
    icon: FileText, 
    title: 'Form 26AS / ITR Verification', 
    desc: 'Income tax return filing aur Form 26AS ke through financial compliance aur income verification.', 
    features: ['ITR Filing Check', 'Form 26AS Verification', 'Income Confirmation', 'Tax Compliance'], 
    category: 'Financial',
    longDesc: 'ITR aur Form 26AS employment aur income verify karne ka ek robust document-based method hai.',
    process: [
      'Verification of TDS entries in Form 26AS.',
      'Cross-matching employers with resume history.',
      'Income verification from ITR-V filings.',
      'Tax compliance status check.'
    ],
    documents: ['Form 26AS', 'ITR Acknowledgement'],
    tat: '1-2 Business Days'
  },
  { 
    id: 'directorship-check',
    icon: UserCog, 
    title: 'Directorship Check', 
    desc: 'MCA records ke through company directorships aur business involvements ki verification.', 
    features: ['Current Directorships', 'Past Appointments', 'Company Status', 'MCA Database'], 
    category: 'Financial',
    longDesc: 'Conflict of interest detect karne ke liye hum candidate ki kisi company mein directorship ya substantial interest verify karte hain.',
    process: [
      'Search in MCA database using DIN.',
      'Listing all current and past directorships.',
      'Checking the status of companies (Active/Dormant).',
      'Conflict of interest analysis.'
    ],
    documents: ['PAN Card', 'DIN (if available)'],
    tat: '1-2 Business Days'
  },
  { 
    id: 'din-verification',
    icon: FileText, 
    title: 'DIN Verification', 
    desc: 'Director Identification Number (DIN) ki authenticity aur associated details check karna.', 
    features: ['DIN Authentication', 'MCA Records Match', 'Director Details', 'Active/Inactive Status'], 
    category: 'Financial',
    longDesc: 'DIN ki authenticity verify karna corporate compliance ka part hai.',
    process: [
      'DIN number authentication from MCA portal.',
      'Matching personal details with MCA records.',
      'Checking for any disqualification of director.'
    ],
    documents: ['DIN Number'],
    tat: 'Instant'
  },
  { 
    id: 'economic-default-check',
    icon: ShieldAlert, 
    title: 'Economic Default Check', 
    desc: 'Willful defaulters, loan defaults aur major financial liabilities ki comprehensive screening.', 
    features: ['Defaulter List Search', 'Loan Default Check', 'Financial Disputes', 'RBI Watchlist'], 
    category: 'Financial',
    longDesc: 'Hum RBI ke willful defaulters list aur suits-filed cases search karte hain.',
    process: [
      'RBI Defaulter list search.',
      'Civil court litigation search for debt recovery.',
      'Bank default registry screening.'
    ],
    documents: ['PAN Card', 'Full Name'],
    tat: '2-3 Business Days'
  },
  { 
    id: 'international-screening',
    icon: Globe, 
    title: 'Global / International Screening', 
    desc: 'Overseas background checks for candidates with international education or work experience in 150+ countries.', 
    features: ['150+ Countries', 'International Courts', 'Global Education', 'Work History Abroad'], 
    category: 'Global',
    longDesc: 'Hum 150+ countries mein localized verification perform karte hain through international partners.',
    process: [
      'Selecting country-specific verification protocols.',
      'Direct coordination with international universities/employers.',
      'Search in international court and criminal registries.',
      'Compliance with local data privacy laws (GDPR, etc.).'
    ],
    documents: ['Passport Copy', 'Overseas Experience/Education certificates'],
    tat: '7-15 Business Days'
  },
  { 
    id: 'identity-verification',
    icon: Fingerprint, 
    title: 'Identity Verification', 
    desc: 'Government-issued IDs ki authentication — Aadhaar, PAN, Passport, Voter ID aur Driving License.', 
    features: ['Aadhaar Verification', 'PAN Check', 'Passport Validation', 'DL Verification'], 
    category: 'Identity',
    longDesc: 'Basic identity verification is the foundation of any background check. Hum multiple ID proofs verify karte hain.',
    process: [
      'Scanning of physical documents for tampering.',
      'Verification against relevant government APIs (NREGA, Income Tax, etc.).',
      'Name, Address and DOB cross-matching.'
    ],
    documents: ['PAN', 'Aadhaar', 'Passport', 'Voter ID', 'DL'],
    tat: 'Instant / 1 Day'
  },
  { 
    id: 'media-internet-check',
    icon: Search, 
    title: 'Media & Internet Check', 
    desc: 'News articles, online reputation aur internet presence screening to identify red flags.', 
    features: ['News Article Search', 'Online Reputation', 'Red Flag Detection', 'Digital Footprint'], 
    category: 'Digital',
    longDesc: 'Hum digital media aur search engines pe candidate ke baare mein adverse news search karte hain.',
    process: [
      'Deep web search for news articles.',
      'Analysis of public domain records.',
      'Identification of any negative media mentions.'
    ],
    documents: ['Full Name', 'Past Employers'],
    tat: '1-2 Business Days'
  },
  { 
    id: 'professional-license-verification',
    icon: Award, 
    title: 'Professional License Verification', 
    desc: 'CA, Doctor, Lawyer, Engineer jaise professional certifications aur licenses ki issuing authority se validation.', 
    features: ['License Validation', 'Certification Check', 'Membership Status', 'Expiry Verification'], 
    category: 'Employment',
    longDesc: 'Professional roles ke liye licenses verify karna mandatory hai (e.g. MCI for Doctors, Bar Council for Lawyers).',
    process: [
      'Verification with the professional council/body.',
      'Checking membership validity and expiry.',
      'Investigation into any professional misconduct reports.'
    ],
    documents: ['License Copy', 'Registration Number'],
    tat: '3-5 Business Days'
  },
  { 
    id: 'reference-check',
    icon: Users, 
    title: 'Reference Check', 
    desc: 'Structured professional reference interviews with former supervisors, colleagues, aur reporting managers.', 
    features: ['Professional References', 'Peer Feedback', 'Manager Review', 'Character Assessment'], 
    category: 'Employment',
    longDesc: 'Reference checks candidate ke behavior, team fit aur performance ke baare mein insights provide karte hain.',
    process: [
      'Conducting structured telephone/email interviews.',
      'Asking about strengths, weaknesses and areas of improvement.',
      'Verifying the relationship with the referee.',
      'Assessing soft skills and professional conduct.'
    ],
    documents: ['Contact Details of 2-3 Referees'],
    tat: '2-4 Business Days'
  },
  { 
    id: 'sex-offender-check',
    icon: UserCheck, 
    title: 'Sex Offender Check', 
    desc: 'Registered sex offender database aur POCSO related records ki comprehensive check.', 
    features: ['Sex Offender Registry', 'POCSO Check', 'National Database', 'Court Records'], 
    category: 'Criminal',
    longDesc: 'High-safety roles (schools, hospitals, child-care) ke liye ye check critical hai.',
    process: [
      'Search in national and state sex offender registries.',
      'Court record search for POCSO and sexual harassment cases.',
      'Negative media screening for relevant charges.'
    ],
    documents: ['Aadhaar Card'],
    tat: '3-5 Business Days'
  },
  { 
    id: 'social-media-check',
    icon: Monitor, 
    title: 'Social Media Check', 
    desc: 'Facebook, LinkedIn, Twitter aur other platforms pe online reputation screening aur content analysis.', 
    features: ['Profile Analysis', 'Content Screening', 'Red Flag Detection', 'Professional Conduct'], 
    category: 'Digital',
    longDesc: 'Public social media profiles analyze karke hum behavior patterns aur potential red flags detect karte hain.',
    process: [
      'Review of public social media posts.',
      'Identification of any hate speech or controversial content.',
      'Verification of professional history on LinkedIn.',
      'Analysis of behavioral consistency.'
    ],
    documents: ['Social Media Handles (Public)'],
    tat: '2-3 Business Days'
  },
  { 
    id: 'uan-pf-verification',
    icon: IndianRupee, 
    title: 'UAN / PF Verification', 
    desc: 'Employee PF account aur UAN number ki EPFO database se authentic verification.', 
    features: ['UAN Verification', 'PF Account Check', 'EPFO Database', 'Employer History'], 
    category: 'Employment',
    longDesc: 'UAN verification se actual employment history aur gaps bina resume ke bhi verify ho sakte hain.',
    process: [
      'Verification of UAN number on EPFO portal.',
      'Checking employer contribution history.',
      'Matching service history with resume claims.',
      'Verification of KYC status of UAN.'
    ],
    documents: ['UAN Number', 'Consent'],
    tat: '1-2 Business Days'
  },
  { 
    id: 'vendor-verification',
    icon: Building2, 
    title: 'Vendor / Supplier Verification', 
    desc: 'Business partners, vendors aur suppliers ki comprehensive background check aur due diligence.', 
    features: ['Business Registration', 'GST Verification', 'Director Background', 'Financial Health'], 
    category: 'Financial',
    longDesc: 'Third-party risk management ke liye hum vendors ki registration, GST compliance aur reputation verify karte hain.',
    process: [
      'Verification of ROC and GST registrations.',
      'Director background and directorship checks.',
      'Financial health analysis (Credit/Litigation).',
      'Physical office/warehouse verification.'
    ],
    documents: ['GST Certificate', 'PAN', 'Company Registration'],
    tat: '5-7 Business Days'
  },
];
