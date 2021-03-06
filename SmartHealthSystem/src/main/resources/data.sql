INSERT INTO "PUBLIC"."ALLERGY" VALUES
(1, 'Egg', 'Food'),
(2, 'Milk', 'Food'),
(3, 'Peanuts', 'Food'),
(4, 'Shellfish', 'Food'),
(5, 'Soy', 'Food'),
(6, 'Soap', 'Skin'),
(7, 'Laundry Detergents', 'Skin'),
(8, 'Fabric Softeners', 'Skin'),
(9, 'Shampoo', 'Skin'),
(10, 'Dust Mites', 'Dust'),
(11, 'Mold', 'Dust'),
(12, 'Pollen', 'Dust'),
(13, '', 'Insect Sting'),
(14, 'Cat', 'Pet'),
(15, 'Dog', 'Pet'),
(16, '', 'Eye'),
(17, 'Penicillin', 'Drug'),
(18, 'Sulfa Drugs', 'Drug'),
(19, 'AntiConvulsants', 'Drug'),
(20, 'Aspirin, ibuprofen and other nonsteroidal anti-inflammatory drugs (NSAIDs)', 'Drug'),
(21, 'Chemotherapy drugs', 'Drug'),
(22, 'Outdoor allergens, such as pollens from trees, grass, weeds, and mold spores', 'Hay Fever'),
(23, 'Indoor allergens, such as pet hair or dander, dust mites and mold', 'Hay Fever'),
(24, 'Irritants, such as cigarette smoke, perfume, and diesel exhaust', 'Hay Fever'),
(25, '', 'Latex Allergy'),
(26, '', 'Mold Allergy'),
(27, '', 'Sinus Infection'),
(28, '', 'Cockroach Allergy');
INSERT INTO "PUBLIC"."MEDICAL_INSURANCE" VALUES
(1, 'National Insurance Co. Ltd.', 'United Health Care Parekh Insurance TPA Private Limited'),
(2, 'Bajaj Allianz General Insurance Co. Ltd.', 'Medi Assist Insurance TPA Private'),
(3, 'Cholamandalam MS General Insurance Co. Ltd', 'MDIndia Health Insurance TPA Private Limited'),
(4, 'Bharti AXA General Insurance Co. Ltd.', 'Paramount Health Services & Insurance TPA Private Limited'),
(5, 'Reliance General Insurance Co. Ltd.', 'Heritage Health Insurance TPA Private Limited'),
(6, 'Royal Sundaram General Insurance Co. Ltd','Family Health Plan Insurance TPA Limited'),
(7, 'The Oriental Insurance Co. Ltd.', 'Raksha Health Insurance TPA Private Limited'),
(8, 'Tata AIG General Insurance Co. Ltd.', 'Vidal Health Insurance TPA Private Limited'),
(9, 'SBI General Insurance Co. Ltd.', 'East West Assist Insurance TPA Private Limited'),
(10, 'ICICI Lombard General Insurance Co. Ltd.', 'Medsave Health Insurance TPA Limited');
INSERT INTO "PUBLIC"."IMMUNIZATION" VALUES
(1, 'BCG'),
(2, 'Hepatitis B Birth dose'),
(3, 'OPV Birth dose '),
(4, 'OPV 1,2 & 3 '),
(5, 'IPV (inactivated Polio Vaccine)'),
(6, 'Pentavelant  1,2 & 3 '),
(7, 'Rota Virus Vaccine'),
(8, 'Measles 1st Dose '),
(9, 'Vitamin A, 1st Dose '),
(10, 'DPT 1st  booster '),
(11, 'OPV Booster '),
(12, 'Measles 2nd  dose '),
(13, 'Vitamin A  (2nd to 9th dose) '),
(14, 'DPT 2nd Booster'),
(15, 'TT '),
(16, 'MMR'),
(17, 'Influenza'),
(18, 'Pneumococcal'),
(19, 'Human PapillomaVirus'),
(20, 'Zoster'),
(21, 'DPT'),
(22, 'Hepatatis A'),
(23, 'Hepatatis B'),
(24, 'Menigococcal'),
(25, 'Varicella'),
(26, 'HiB'),
(27, 'Typhoid'),
(28, 'Rabies');
INSERT INTO "PUBLIC"."HEALTH_CARE_PROVIDER" VALUES
(1, 'Bangalore', '080 4030 4050', '', 'The Apollo Hospital, Bannerghatta', '560083', 'KARNATAKA', 0),
(2, 'Bangalore', '080 4612 4444', '', 'The Apollo Hospital, Jayanagar', '560041', 'KARNATAKA', 0),
(3, 'Bangalore', '080 4668 8888', '', 'Apollo Hospitals, Sheshadripuram', '560020', 'KARNATAKA', 0),
(4, 'Bangalore', '186 0208 0208', '', 'Narayana Multispeciality Hospital, HSR Layout', '560x102', 'KARNATAKA', 0),
(5, 'Bangalore', '186 0208 0208', '', 'Mazumdar Shaw Medical Center, Bommasandra', '560099', 'KARNATAKA', 0),
(6, 'Bangalore', '186 0208 0208', '', 'Narayana Medical Centre, Langford Town', '560025', 'KARNATAKA', 0),
(7, 'Bangalore', '080 2679 4222', '', 'ULTRA DIAGNOSTIC SERVICES, Banashankari', '560085', 'KARNATAKA', 2),
(8, 'Bangalore', '9880461121', '', 'Metro Path Labs, Malleswaram', '560010', 'KARNATAKA', 2),
(9, 'Bangalore', '080 2544 4372', '', 'Sadiya Diagnostic Centre, Govindapura, Yelahanka', '560045', 'KARNATAKA', 2),
(10, 'Bangalore', ' 094490 31003', '', 'Health Nest, HSR Layout', '560102', 'KARNATAKA', 1),
(11, 'Bangalore', '081470 36308', '', 'Aarna Aesthetic Dermatology and Cardiology Clinic, Jayanagar', '560070', 'KARNATAKA', 1),
(12, 'Bangalore', '186 0208 0208', '', 'Narayana Institute of Cardiac Sciences, Bommasandra', '560099', 'KARNATAKA', 0);
INSERT INTO "PUBLIC"."DOCTOR" VALUES
(1, 'darshan@gmail.com', 'Dr. Darshan B. N', '123', '57034', 'Cardiology'),
(2, 'rangathappa@gmail.com', 'Dr. A Ranganathappa', '123', '14622', 'Cardiology');
INSERT INTO "PUBLIC"."DOCTOR_HEALTH_CARE_PROVIDERS" VALUES
(1, 11),
(1, 12),
(1, 10),
(2, 10),
(2, 2);
INSERT INTO "PUBLIC"."MEDICINE" VALUES
(1, 'DOLO (650mg)', 'Analgesic and AntiPyretic', '650', 'Paracetamol', 'Micro Labs Ltd (B&B)', '1.8', 0),
(2, 'Abrozin (50ml)', 'Analgesic and AntiPyretic', '50', 'Paracetamol', 'Arbro Pharmaceuticals Pvt Ltd.', '21', 2),
(3, 'Bactomol (500mg)', 'Analgesic and AntiPyretic', '500', 'Paracetamol', 'B.L Pharma Ltd', '1.1', 0),
(4, 'DOLO (60ml)', 'Analgesic and AntiPyretic', '60', 'Paracetamol', 'Micro Labs Ltd (B&B)', '27', 2),
(5, 'Aludrox (840mg)', 'Antacids', '840', 'Aluminium Hydroxidd and Magnesium Hydroxide', 'Wyeth Limited', '0.22', 0),
(6, 'Hegel MPS (170ml)', 'Antacids', '170', 'Aluminium Hydroxidd and Magnesium Hydroxide', 'Health Guard (I) Pvt Ltd.', '42', 2),
(7, 'Dizicum gel (170ml)', 'Antacids', '170', 'Aluminium Hydroxidd and Magnesium Hydroxide', 'Taj Pharmaceauticals Pvt Ltd', '75', 2),
(8, 'Albenzole (10ml) (10ml)', 'AntiHelmintics', '10', 'Albendazole', 'Khandelwal Labs Pvt Ltd', '11.09', 2),
(9, 'Omnitel (400mg)', 'AntiHelmintics', '400', 'Albendazole', 'Pharmed Ltd', '10.50', 0);
INSERT INTO "PUBLIC"."PATIENT" VALUES
(1000, NULL, NULL,'172', 9, '123', 'm', 'abc@gmail.com', 'Arun','75'),
(1001, NULL, NULL,'180',9, '123', 'm', 'abcd@gmail.com', 'Malu','95');
/*INSERT INTO "PUBLIC"."PATIENT_ALLERGY" VALUES
(1, 'Wheezing', 1, 1),
(2, 'Vomiting', 2, 1),
(3, 'blah blah', 3, 2);
INSERT INTO "PUBLIC"."PATIENT_VISIT" VALUES
(1, 'TSH', 'Unsteady Thyroid', '2021-03-10 20:45:16','', '2021-03-02 20:45:16', 1, 10, 1),
(2, 'TSH. Sugar', 'Throat swelled', '2021-03-20 20:45:16','', '2021-03-10 20:45:16', 1, 10, 1),
(3, 'Cholesterol', 'Obese', '2021-01-10 20:45:16','', '2021-01-02 20:45:16', 2, 10, 2),
(4, '', '', '2021-01-10 20:45:16', 'Bypass', '2021-01-02 20:45:16', 1, 10, 1),
(5, 'TSH', 'Obese', '2021-01-10 20:45:16', '', '2021-01-02 20:45:16', 2, 10, 1);
INSERT INTO "PUBLIC"."PATIENT_MEDICINE" VALUES
(1, '3', '2021-03-02 20:45:16', '2021-03-10 20:45:16', 2, 1, 1);
(2, '2', '2021-03-10 20:45:16', '2021-03-20 20:45:16', 1, 1, 1),
(3, '1', '2021-01-10 20:45:16', '2021-01-02 20:45:16', 4, 2, 3);*/