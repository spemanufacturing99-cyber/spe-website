// Run with: MONGODB_URI="mongodb://..." node scripts/seed.js
require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');

const services = [
  {
    title: 'Welding Services',
    slug: 'welding-services',
    category: 'Welding Services',
    excerpt: 'Innovative welding solutions with 145 years of combined welder experience and AWS certifications for all welding types.',
    longDescription: [
      'SPE (Satnam Process Engineering) Manufacturing, operating since 1982, offers the most innovative welding solutions to any challenging applications. Our highly trained welders are experts in TIG, MIG, aluminum, and stainless steel welding with 145 years of combined experience.',
      'Serving the Punjab India area, our 8,000 square foot facility is equipped with six MIG and TIG welding stations. Using only state-of-the-art equipment and materials, SPE continuously researches new concepts and developments in welding technology. Our capabilities span from small machined parts to large welded assemblies weighing 20,000 pounds.',
      'AWS Certified Welding: SPE is an AWS D1.1 Structural Steel, AWS D1.2 Aluminum, and AWS D1.6 Stainless Steel certified facility. In addition, stringent in-house quality control is enforced to ensure only the highest quality products are manufactured. Many years of knowledge and experience allow us to serve a diverse line of industries.',
      'Committed to our customers\' success, the SPE team will support you from concept to completion. We will recommend the most cost-effective materials for any precision welding application.'
    ],
    welding_types: [
      {type: 'TIG Welding', description: 'Tungsten Inert Gas welding for precision and high-quality joints, ideal for stainless steel and aluminum.'},
      {type: 'MIG Welding', description: 'Metal Inert Gas welding for faster production rates and structural applications.'},
      {type: 'Aluminum Welding', description: 'Specialized aluminum welding expertise for aerospace, marine, and structural applications.'},
      {type: 'Stainless Steel Welding', description: 'Expert stainless steel welding maintaining corrosion resistance and material integrity.'}
    ],
    certifications: [
      {cert: 'AWS D1.1', desc: 'Structural Steel Welding Certification'},
      {cert: 'AWS D1.2', desc: 'Aluminum Welding Certification'},
      {cert: 'AWS D1.6', desc: 'Stainless Steel Welding Certification'}
    ],
    features: [
      'Operating since 1982 - 40+ years experience',
      '145 years combined welder experience',
      '8,000 square foot facility in Punjab India',
      'Six MIG and TIG welding stations',
      'State-of-the-art equipment and materials',
      'AWS certified for multiple welding types',
      'Small to large assemblies (up to 20,000 lbs)',
      'Stringent in-house quality control',
      'Support from concept to completion'
    ],
    specs: [
      {label:'Facility Size', value:'8,000 square feet'},
      {label:'Welding Stations', value:'6 MIG and TIG stations'},
      {label:'Assembly Capacity', value:'Up to 20,000 pounds'},
      {label:'Experience', value:'145 years combined welder expertise'},
      {label:'Operating Since', value:'1982'}
    ],
    images: ['/the-art-and-science.png','/precision-metal-chain.png','/certified-welding.png']
  },
  {
    title: 'Bulk Milk Cooling Tank (DX Type, IBT)',
    slug: 'bulk-milk-cooling-tanks',
    category: 'Products',
    excerpt: 'Bulk milk cooling and horizontal IBT tanks in multiple capacities with laser-welded evaporators.',
    longDescription: [
      'SPE supplies a range of bulk milk cooling tanks (DX Type & IBT) in multiple capacities suitable for dairy and process applications. Our products include closed horizontal types and horizontal IBT models built for long service life and hygienic operation.',
      'We employ laser welding technology for longer evaporator life and precise assemblies. Standard capacities include 3000, 5000 and 8000 litres, and OSPE horizontal types in 500, 1000, 2000 and 5000 litres.'
    ],
    features: [
      'Bulk Milk Cooler 751281',
      'Closed horizontal Type 3000, 5000, 8000 Litres',
      'Longer Evaporator Life With Laser Welding Technology',
      'OSPE Horizontal Type 500, 1000, 2000, 5000 Litres'
    ],
    specs: [
      {label: 'Types', value: 'DX Type, IBT Horizontal'},
      {label: 'Capacities', value: '3000, 5000, 8000, up to 5000 (OSPE variants)'}
    ],
    images: ['/products/bulk-milk.svg']
  },
  {
    title: 'CIP Tanks & Process Tanks',
    slug: 'cip-tanks',
    category: 'Products',
    excerpt: 'CIP systems and process tanks including acid, lye, hot water and fresh water tanks in multiple capacities.',
    longDescription: [
      'Complete CIP tank solutions for cleaning-in-place and process storage. Available in a variety of capacities and configurations to integrate with plant CIP systems.'
    ],
    features: [
      'Acid Tank 10 KL',
      'Acid Tank Capacity 8000 Liters',
      'CIP Tank Lye, Acid, Hotwater, Fresh Water',
      'Lye Dissolving Tank 1000 Liter'
    ],
    specs: [
      {label: 'Common Capacities', value: '1,000 L – 10,000 L'},
      {label: 'Materials', value: 'Stainless Steel (food grade)'}
    ],
    images: ['/products/cip-tank.svg']
  },
  {
    title: 'Conveyors, Packing Hoppers & Silos',
    slug: 'conveyors-packing-silos',
    category: 'Products',
    excerpt: 'Conveyors, packing hoppers, drying chambers, cyclones and powder silos for bulk handling and processing.',
    longDescription: [
      'SPE offers turnkey bulk handling equipment including powder silos, cyclones, telescopic conveyors and packing hoppers tailored to industrial and food processing plants.'
    ],
    features: [
      '70 MT Powder Silo Loading on Trailer',
      '70 MT Powder Silo',
      'Cyclone Dia 3550, 347',
      'Dough Hopper For Biscuit Plant',
      'Drying Chamber',
      'Powder Packing Hopper',
      'Telescopic Conveyor'
    ],
    specs: [
      {label: 'Silo Capacity', value: 'Up to 70 MT (custom)'},
      {label: 'Cyclone Sizes', value: 'Dia 3550, 347 (examples)'}
    ],
    images: ['/products/conveyor.svg']
  },
  {
    title: 'Cream & Ghee Tanks and Boilers',
    slug: 'cream-ghee-tanks',
    category: 'Products',
    excerpt: 'Cream storage tanks, ghee boilers and settling tanks in multiple capacities for dairy processing.',
    longDescription: [
      'Range of cream and ghee handling equipment including storage tanks, boilers, and settling tanks designed for hygienic dairy processing.'
    ],
    features: [
      'Cream Storage Tank 10 KL',
      'Cream Storage Tank 15 KL',
      'Cream Storage Tank 20 KL',
      'Ghee Boiler 3 KL',
      'Ghee Settling Tank',
      'Ghee Storage Tank 10 KL'
    ],
    specs: [
      {label: 'Typical Capacities', value: '3 KL – 20 KL'},
      {label: 'Applications', value: 'Dairy processing, ghee production'}
    ],
    images: ['/products/cream-ghee.svg']
  },
  {
    title: 'Erection & Commissioning Services',
    slug: 'erection-commissioning',
    category: 'Products',
    excerpt: 'On-site erection, installation and commissioning services for process equipment and tanks.',
    longDescription: [
      'Full erection and commissioning support for installed equipment, including mechanical assembly, piping, instrumentation hookup and start-up assistance.'
    ],
    features: ['Erection & Commissioning Services'],
    specs: [],
    images: ['/products/erection.svg']
  },
  {
    title: 'Evaporator Assembly & Hydroflow Tanks',
    slug: 'evaporator-assembly',
    category: 'Products',
    excerpt: 'Evaporator assemblies, regenerative heaters and vapour separators for process plants.',
    longDescription: [
      'Supply of evaporator assemblies, regenerative heaters and vapour separators for industrial process and dairy evaporation systems.'
    ],
    features: [
      'Direct Contact Regenerative Heater',
      'Evaporator Assembly',
      'Vapour Separator'
    ],
    specs: [],
    images: ['/products/evaporator.svg']
  },
  {
    title: 'Hygienic Doors & Shoe Racks',
    slug: 'hygienic-doors-racks',
    category: 'Products',
    excerpt: 'Hygienic doors, stainless shoe racks and insulated doors for hot rooms and clean areas.',
    longDescription: [
      'Hygienic doors and storage solutions designed for food, dairy and pharmaceutical facilities: insulated stainless doors and hygienic shoe racks.'
    ],
    features: [
      'Hygienic Shoe Rack',
      'S.S Door Insulated For Hot Room',
      'S.S Shoe Rack',
      'Two S.S Door'
    ],
    specs: [],
    images: ['/products/hygienic.svg']
  },
  {
    title: 'Road Milk Tankers',
    slug: 'road-milk-tankers',
    category: 'Products',
    excerpt: 'Stainless steel road milk tankers and thermos lorry tanks for safe liquid transport.',
    longDescription: [
      'Custom road milk tanker bodies and thermos lorry tanks built to transport dairy products safely and hygienically.'
    ],
    features: [
      'Road Milk Tanker 1',
      'Road Milk Tanker 2',
      'Road Milk Tanker 3',
      'Road Milk Tanker 4',
      'Mahindra Mex Termos Tank Cap 2000 Liter',
      'S.S Thermos Lorry Tank'
    ],
    specs: [],
    images: ['/products/road-tanker.svg']
  },
  {
    title: 'Storage Tankers & Silos',
    slug: 'storage-tankers-silos',
    category: 'Products',
    excerpt: 'Storage tankers, balance tanks and large milk silos with commissioning and testing support.',
    longDescription: [
      'Large-capacity storage tankers and silos for milk reception, storage and transport with full testing and commissioning support.'
    ],
    features: [
      'Balance Tank',
      'Horizontal Milk Storage Tank 10 KL',
      'Milk Silo Capacity 150 KL',
      'Milk Reception Tank 14 KL',
      'MILK SILO 100 KL'
    ],
    specs: [
      {label: 'Silo Capacities', value: '100 KL, 150 KL (examples)'},
      {label: 'Testing', value: 'Full water fill-up and commissioning tests available'}
    ],
    images: ['/products/storage-tanker.svg']
  },
  {
    title: 'Aluminum Welding',
    slug: 'aluminum-welding',
    category: 'Welding Services',
    excerpt: 'Expert aluminum welding services with AWS D1.2 certification for aerospace, marine, and structural applications.',
    longDescription: [
      'With a staff that has over a decade of combined years of experience in welding, SPE (Satnam Process Engineering) Manufacturing is an expert in aluminum welding. Possessing extensive experience in the welding of many types of metals, including aluminum.',
      'Aluminum welding at SPE is performed per AWS D1.2 specifications. Aluminum welding can be easily done using MIG or TIG welding processes. The selection of the welding process depends on the project, aluminum series selected, and environment the component will be used in.',
      'An example of a component produced at the SPE facility using aluminum welding is an aluminum shipping pallet for an aerospace project. Other aluminum welding applications include aluminum irrigation pipes and aluminum engine components.',
      'Not only do we have extensive experience in MIG and TIG welding, including aluminum welding services, but SPE Manufacturing can also provide precision welding services using stainless steel, carbon steel, bronze, and many other metals.'
    ],
    advantages: [
      {title: 'Excellent Strength', desc: 'Including impact strength for demanding applications'},
      {title: 'Outstanding Durability', desc: 'Long-lasting components built to withstand environmental challenges'},
      {title: 'Low Maintenance', desc: 'Minimal upkeep required for aluminum welded assemblies'},
      {title: 'High-Quality Welds', desc: 'Precision welding per AWS D1.2 specifications'}
    ],
    features: [
      'AWS D1.2 Aluminum Welding Certification',
      'Over a decade of specialized aluminum welding experience',
      'TIG and MIG aluminum welding capability',
      'Aerospace project expertise',
      'Custom aluminum component solutions',
      'Multiple metal welding capability (stainless, carbon steel, bronze)',
      'Precision joints and flawless welds'
    ],
    specs: [
      {label:'Certification', value:'AWS D1.2 Aluminum'},
      {label:'Welding Methods', value:'TIG, MIG'},
      {label:'Applications', value:'Aerospace, Irrigation, Engine Components, Assemblies'},
      {label:'Additional Capabilities', value:'Stainless Steel, Carbon Steel, Bronze Welding'}
    ],
    images: ['/the-art-and-science.png','/precision-metal-chain.png','/certified-welding.png']
  },
  {
    title: 'MIG Welding',
    slug: 'mig-welding',
    category: 'Welding Services',
    excerpt: 'Metal Inert Gas (MIG) welding for fast production rates and high-quality structural welding applications.',
    longDescription: [
      'Over the past 30 years, SPE (Satnam Process Engineering) Manufacturing has been providing a broad range of industries welding services in Moga and the surrounding area. With six MIG and TIG welding stations, SPE has one of the highest in-house capabilities out of all welders in the Punjab India area for aluminum, carbon steel, stainless steel, cast iron, and bronze welding.',
      'MIG (Metal Inert Gas) welding is an automatic or semi-automatic welding method that utilizes a wire electrode along with a shielding gas, sometimes referred to as a consumable arc, which is fed through a welding gun. Several power sources can be used for MIG welding, including direct current (DC) - constant voltage, which is the most common, as well as constant current and alternating current power sources.',
      'MIG welding was initially implemented in the 1940s, specifically for welding non-ferrous metals such as aluminum. MIG welding soon became used for steel as well, since it permitted a shorter welding time compared to other traditional welding methods. Additional improvements in the MIG welding process through the 1950s and 1960s resulted in MIG welding becoming one of the most popular, heavily used industrial manufacturing processes.',
      'SPE has the experience and the capabilities to handle stock up to 40\' long, 12\' square, with a minimum thickness of .0030". Regardless of how complex your component requirements are, our experienced staff is ready to discuss all your MIG welding and TIG welding specifications.'
    ],
    mig_advantages: [
      {advantage: 'Adaptable to robotic automation'},
      {advantage: 'Relatively simple to learn'},
      {advantage: 'Versatile'},
      {advantage: 'Relative ease of use'},
      {advantage: 'MIG welds can be completed quickly (speed)'}
    ],
    mig_capabilities: [
      'Four commonly-recognized techniques of metal transfer: pulsed spray, spray, short-circuiting, and globular',
      'Aluminum welding capability',
      'Carbon steel welding capability',
      'Stainless steel welding capability',
      'Cast iron welding capability',
      'Bronze welding capability',
      'Stock capacity: up to 40\' long, 12\' square, minimum .0030" thickness'
    ],
    features: [
      'Six MIG and TIG welding stations',
      '30 years of MIG welding experience',
      'AWS certified for multiple materials',
      'High in-house capabilities (aluminum, carbon steel, stainless, cast iron, bronze)',
      'Project-specific Weld Procedure Specifications (WPS)',
      'Semi-automatic and automatic welding methods',
      'Multiple power source options (DC, AC)',
      'Large stock capability'
    ],
    specs: [
      {label:'Welding Stations', value:'6 MIG and TIG stations'},
      {label:'Materials', value:'Aluminum, Carbon Steel, Stainless Steel, Cast Iron, Bronze'},
      {label:'Certifications', value:'AWS D1.1, D1.2, D1.6'},
      {label:'Maximum Stock', value:'40\' long, 12\' square, .0030" minimum thickness'},
      {label:'Experience', value:'30 years of MIG welding services'}
    ],
    images: ['/the-art-and-science.png','/precision-metal-chain.png','/certified-welding.png']
  },
  {
    title: 'Stainless Steel Welding',
    slug: 'stainless-steel-welding',
    category: 'Welding Services',
    excerpt: 'Expert stainless steel welding with AWS D1.6 certification maintaining corrosion resistance and material integrity.',
    longDescription: [
      'SPE (Satnam Process Engineering) Manufacturing has the in-house equipment and knowledgeable staff to weld a wide range of materials, including stainless steel. We are capable of welding a variety of shapes, such as channels, bar, sheet, angles, plate, and tubing.',
      'As an experienced welder, we can perform stainless steel welding on components, parts and assemblies as small as what would fit in the palm of your hand to as large as 10 tons. Stainless steel grades, such as 304L and 316L, are easy to weld and exhibit very good strength, making them excellent candidates for many stainless steel welding applications.',
      '17-4 stainless has been used in projects that require special heat-treating after the welding has been completed. At SPE, stainless steel is welded using the arc/stick, or TIG welding processes. In the last 10 to 20 years, the world has seen an explosion of applications for stainless steel.',
      'In addition to our MIG welding and TIG welding services, we have other in-house services including glass beading, electrical, painting and plumbing. Our team is here to serve you and answer any questions about stainless steel welding.'
    ],
    stainless_grades: [
      {grade: '304L Stainless', desc: 'Easy to weld with very good strength, excellent for many applications'},
      {grade: '316L Stainless', desc: 'Superior corrosion resistance with excellent strength and weldability'},
      {grade: '17-4 Stainless', desc: 'Used in projects requiring special heat-treating after welding'}
    ],
    applications: [
      {industry: 'Food and Process Industry', desc: 'Various assemblies used inside of railcars for collecting liquid waste made using light gauge stainless steel sheet metal'},
      {industry: 'Wastewater Industry', desc: 'Due to corrosion resistance properties, stainless steel assemblies are used throughout the wastewater industry'},
      {industry: 'Building Components', desc: 'Base plates utilized in the foundation of building projects'}
    ],
    features: [
      'AWS D1.6 Stainless Steel Welding Certification',
      'Arc/stick and TIG welding processes',
      'Multiple stainless grades (304L, 316L, 17-4)',
      'Various shape capabilities (channels, bars, sheets, angles, plates, tubing)',
      'Small components to 10-ton assemblies',
      'Heat-treating expertise',
      'Food, wastewater, and building industry experience'
    ],
    specs: [
      {label:'Certification', value:'AWS D1.6 Stainless Steel'},
      {label:'Welding Methods', value:'Arc/Stick, TIG'},
      {label:'Stainless Grades', value:'304L, 316L, 17-4'},
      {label:'Assembly Range', value:'Palm-sized components to 10 tons'},
      {label:'Shapes Available', value:'Channels, Bars, Sheets, Angles, Plates, Tubing'}
    ],
    images: ['/the-art-and-science.png','/precision-metal-chain.png','/certified-welding.png']
  },
  {
    title: 'TIG Welding',
    slug: 'tig-welding',
    category: 'Welding Services',
    excerpt: 'Expert tungsten inert gas (TIG) welding with decades of experience for precision and high-quality welds.',
    longDescription: [
      'SPE (Satnam Process Engineering) Manufacturing has decades of experience offering expert tungsten inert gas (TIG) welding to a wide variety of industries and is one of the most experienced welding operations in Punjab India.',
      'TIG welding, also known as heliarc welding and gas tungsten arc welding (GTAW), is used to produce incredibly strong, corrosive-resistant, and precision welds on a variety of metals, including aluminum, carbon steel, iron, magnesium, nickel, steel, and stainless steel, with many filler metals. With TIG welding, welding variables can be precisely controlled and welding services can be carried out with or without fillers.',
      'Projects involving light gauge aluminum are particularly suited for TIG welding, resulting in mechanically strong and lightweight products of outstanding quality. With six welding stations and various sizes and configurations of TIG welding machines, SPE is ready to create high-quality custom parts of any size or complexity.',
      'By maintaining the highest training and safety standards, SPE is able to use this difficult and skilled welding process as required. In consultation with clients, we design and adhere to project-specific Welding Procedure Specifications in order to ensure that customers receive quality work while maintaining codes and standards. SPE has highly skilled professionals ready to meet your needs.'
    ],
    certifications_tig: [
      {cert: 'AWS D1.1', desc: 'Structural Steel TIG Welding'},
      {cert: 'AWS D1.2', desc: 'Aluminum TIG Welding'},
      {cert: 'AWS D1.6', desc: 'Stainless Steel TIG Welding'}
    ],
    tig_materials: [
      'Aluminum - precision welds for aerospace and lightweight applications',
      'Carbon Steel - strong and durable structural welds',
      'Iron - industrial and structural applications',
      'Magnesium - lightweight and high-strength applications',
      'Nickel - corrosion-resistant and specialized alloys',
      'Stainless Steel - precision and corrosion-resistant solutions',
      'With many filler metals available for custom applications'
    ],
    features: [
      'Decades of TIG welding experience',
      'AWS certifications for multiple materials (D1.1, D1.2, D1.6)',
      'Precision-controlled welding variables',
      'With or without filler capability',
      'Six welding stations with various configurations',
      'Project-specific Welding Procedure Specifications',
      'Light gauge aluminum expertise',
      'High training and safety standards',
      'Custom parts of any size or complexity'
    ],
    specs: [
      {label:'Process', value:'Tungsten Inert Gas (TIG) / GTAW / Heliarc'},
      {label:'Certifications', value:'AWS D1.1, D1.2, D1.6'},
      {label:'Materials', value:'Aluminum, Carbon Steel, Iron, Magnesium, Nickel, Stainless Steel'},
      {label:'Welding Stations', value:'6 with various sizes and configurations'},
      {label:'Filler', value:'With or without filler capability'}
    ],
    images: ['/the-art-and-science.png','/precision-metal-chain.png','/certified-welding.png']
  },
  {
    title: 'CNC Machining',
    slug: 'cnc-machining',
    category: 'Machining Services',
    excerpt: 'Precision CNC machining with multi-axis equipment and 200+ years of combined experience for complex precision parts.',
    longDescription: [
      'SPE (Satnam Process Engineering) Manufacturing specializes in machining for components that require high degrees of precision and repeatability. We add the power of computer numerically controlled (CNC), computer aided manufacturing (CAM), and industry-leading Surfware software tools to our decades of machining experience to produce perfect products based on our customers\' CAD designs.',
      'Our CNC machining specialists can program and oversee the production of highly complicated precision parts with the highest standards of quality, reproducibility, and safety in mind. With over 200 combined years of expertly conceptualizing, designing, and creating products for many industries, our ability to quickly and efficiently produce highly specific machined parts in a variety of materials sets SPE apart as a leading Punjab India manufacturer.',
      'Precision CNC machining was initially developed over 50 years ago and was designed to consistently replicate and reproduce parts requiring multiple complex machining steps, eliminating the part-to-part variations of the human machinist/operator. The successful result relies on experienced CNC machining specialists to program the CNC procedure properly.',
      'Our job shop maintains a full service capability to meet nearly any customer\'s machining needs. Housed in an 8,000-square-foot facility, we employ over 20 highly skilled workers and utilize a wide variety of state-of-the-art equipment including hydraulic assembly, electrical wiring, plumbing, glass-beading, and delivery services.'
    ],
    multi_axis_equipment: [
      {machine: 'VM3 Vertical Mill', specs: '50" x 16" x 18" envelope'},
      {machine: 'VMX50 Vertical Mill with 4th Axis', specs: '50" by 26" by 24" envelope'},
      {machine: 'VMX42 Vertical Mill with 4th Axis', specs: '42" by 24" by 24" envelope'}
    ],
    cnc_advantages: [
      {advantage: 'Highly precise production parts', desc: 'Extremely small tolerance variations with virtually identical components'},
      {advantage: 'Low labor requirements and costs', desc: 'One experienced specialist with CNC can perform jobs of several people, fewer errors mean lower costs'},
      {advantage: 'Increased productivity', desc: 'Once initial setup is done, CNC machining can continue 24 hours a day limited only by cutter wear and material inventory'},
      {advantage: 'Safer production', desc: 'Specialist monitors but is not involved in machining steps, leading to safer manufacturing environment'}
    ],
    manufacturing_capabilities: [
      'Short production runs and component prototypes in 2-3 days',
      'In-house production capacity',
      'CAD/CAM file and CNC program capability',
      'Hand-drawn sketch to finished part capability',
      'Design assistance and engineering assistance',
      'Manufacturability determination and material recommendations',
      'AutoCAD design and SURFCAM programming expertise',
      'Over 25 years of combined machining and prototyping experience',
      'Prototype to short run production'
    ],
    features: [
      'Over 200 combined years of machining experience',
      '8,000 square foot facility',
      'Over 20 highly skilled workers',
      'Multi-axis CNC equipment',
      'Surfware and SURFCAM software tools',
      'CAD/CAM capabilities',
      '24-hour production capability',
      'Prototyping to production services',
      'Design and engineering assistance',
      'Additional services: hydraulic assembly, electrical wiring, plumbing, glass-beading'
    ],
    specs: [
      {label:'Facility Size', value:'8,000 square feet'},
      {label:'Skilled Workers', value:'Over 20'},
      {label:'Experience', value:'200+ combined years'},
      {label:'Equipment', value:'Multi-axis Hurco mills with 4th axis capability'},
      {label:'Software', value:'Surfware, SURFCAM, AutoCAD'}
    ],
    images: ['/the-art-and-science.png','/precision-metal-chain.png','/certified-welding.png']
  },
  {
    title: 'Stainless Steel Machining',
    slug: 'stainless-steel-machining',
    category: 'Machining Services',
    excerpt: 'Expert stainless steel machining with specialized knowledge for complex precision parts with strict tolerances.',
    longDescription: [
      'SPE (Satnam Process Engineering) Manufacturing is an experienced full service stainless steel machine shop. A popular metal for manufacturing projects, stainless steel offers the strength of carbon steel, high corrosion-resistance, and high threshold for wear that many customers demand for their projects.',
      'Stainless steel provides great benefits to customers, but it presents unique machining difficulties. SPE\'s years of machining experience are capable of meeting these and other challenges. Our stainless steel machining specialists are experts in machining precisely while carefully maintaining strict tolerances.',
      'We monitor and adapt to the demands of each stainless steel type (including 304L, 316L, and other alloys), and provide customers with finished stainless machined parts of exceeding quality. SPE excels at machining stainless steel using a number of industry-leading tools and techniques.',
      'For decades, SPE has offered solutions for stainless steel machining projects of any scale or scope. Our work for Dairy, Food and process industries and other industries makes us a manufacturing leader in fabricating, milling, welding, and machining.'
    ],
    stainless_steel_grades_machining: [
      {series: '300 Series', grades: 'Including 304, 316, 321, 310, 301, 347, 317', desc: 'All shapes available'},
      {series: '17 Series', grades: '17-7 PH, 17-5 PH, 17-4 PH', desc: 'In all shapes'},
      {series: 'Additional Alloys', grades: '304L, 316L, and other specialized alloys', desc: 'With expert machining expertise'}
    ],
    industries_served_machining: [
      {industry: 'Dairy Industry', desc: 'Precision components and assemblies'},
      {industry: 'Food and Process Industries', desc: 'Corrosion-resistant machined parts'},
      {industry: 'Various Industrial Applications', desc: 'Manufacturing solutions of any scale'}
    ],
    stainless_benefits: [
      'Strength of carbon steel',
      'High corrosion-resistance',
      'High threshold for wear',
      'Excellent for critical applications',
      'Long service life',
      'Low maintenance requirements'
    ],
    features: [
      'Experienced full-service stainless steel machine shop',
      'Specialized knowledge of stainless steel machining challenges',
      'Precision machining with strict tolerances',
      'Multiple stainless steel grades expertise (300 and 17 Series)',
      '304L, 316L and other alloy specialization',
      'Industry-leading tools and techniques',
      'Decades of stainless steel machining experience',
      'Dairy, food, and process industry expertise',
      'Projects of any scale or scope',
      'High-quality finished components'
    ],
    specs: [
      {label:'Stainless Grades Available', value:'300 Series (304, 316, 321, 310, 301, 347, 317) and 17 Series (17-7 PH, 17-5 PH, 17-4 PH)'},
      {label:'Specialization', value:'304L, 316L and other alloys'},
      {label:'Industries Served', value:'Dairy, Food, Process, and various industrial applications'},
      {label:'Capabilities', value:'Machining, Fabrication, Milling, Welding'}
    ],
    images: ['/the-art-and-science.png','/precision-metal-chain.png','/certified-welding.png']
  },
  {
    title: 'Custom Pressure Vessel Fabrication',
    slug: 'custom-pressure-vessels',
    category: 'Pressure Vessels',
    excerpt: 'End-to-end design, fabrication, testing, and erection of pressure vessels.',
    longDescription: [
      'We combine engineering expertise and modern fabrication to deliver bespoke pressure vessels tailored to client needs.',
      'Design, material selection, fabrication, NDT, surface treatment, and commissioning support.'
    ],
    features: ['Full turnkey manufacturing', 'Material traceability and certified welding', 'Advanced NDT'],
    specs: [{label:'Max Diameter', value:'4.5 m'}, {label:'Max Length', value:'18 m'}],
    images: ['/the-art-and-science.png','/precision-metal-chain.png','/certified-welding.png']
  },
  {
    title: 'Stainless Steel Fabrication',
    slug: 'stainless-steel-fabrication',
    category: 'Fabrication & Erection',
    excerpt: 'Custom precision stainless steel fabrication with modern CNC machining, welding, assembly, and finishing capabilities.',
    longDescription: [
      'SPE (Satnam Process Engineering) Manufacturing\'s home in Punjab, India makes it an ideal firm to manage any of our customers\' stainless steel fabrication needs. With modern in-house CNC machining capabilities, welding stations, and hundreds of combined years of experience taking designs and creating custom precision parts and massive engineered structures, SPE is able to sheet cut, weld, assemble, and finish any stainless steel fabrication project to precise standards for a wide variety of industries.',
      'Stainless steel is particularly suitable for fabrications requiring great mechanical strength, high corrosion-resistance, low maintenance, and the material\'s natural appearance. As one of the most comprehensive manufacturing firms of its kind, SPE brings value-added experience and resources to projects as small as a hand and as large as one can imagine.'
    ],
    features: [
      'Modern in-house CNC machining capabilities',
      'Multiple welding stations with certified procedures',
      'Sheet cutting and precision machining',
      'Custom assembly and finishing services',
      'High corrosion-resistance and mechanical strength',
      'Low maintenance material solutions',
      'Scalable projects from small components to large structures'
    ],
    specs: [
      {label:'Material Type', value:'Stainless Steel (304, 316, etc.)'},
      {label:'Max Sheet Size', value:'Custom cutting capabilities'},
      {label:'Welding Standards', value:'ASME, AWS certified'},
      {label:'Surface Treatment', value:'Polishing, Passivation, Custom Finishes'}
    ],
    images: ['/the-art-and-science.png','/precision-metal-chain.png','/certified-welding.png']
  },
  {
    title: 'Custom Stainless Steel Components',
    slug: 'custom-stainless-steel-components',
    category: 'Fabrication & Erection',
    excerpt: 'Supply chain support for custom stainless steel components in multiple alloys and shapes for diverse industries.',
    longDescription: [
      'SPE (Satnam Process Engineering) Manufacturing is capable of building, bending, punching, welding, and configuring several alloys of stainless steel into a variety of shapes to meet your specific requirements. We work with industry-standard stainless steels including 304L, 316L, and 17-4 alloys.',
      'SPE (Satnam Process Engineering) Manufacturing has the resources and experience to handle requests of all sizes and quantities. Utilize us in your stainless steel supply chain manufacturing process to simplify and optimize your stainless steel fabrication product or project. We have provided supply chain support to a wide variety of industries. Some previous projects at SPE (Satnam Process Engineering) Manufacturing utilizing stainless steel fabrication include:'
    ],
    industries: [
      {title: 'Transportation Industry', description: 'Various assemblies are used inside of railcars for collecting liquid waste are made using light gauge stainless steel sheet metal.'},
      {title: 'Wastewater Industry', description: 'Due to its corrosion-resistant properties, stainless steel assemblies are used throughout the wastewater industry.'},
      {title: 'Clean Water Industry', description: 'Process piping components and stainless steel structures are used to hold the components assembled in plants that create clean water.'},
      {title: 'Building Components', description: 'Stainless steel base plates are used as foundations for building projects.'}
    ],
    features: [
      'Multiple stainless steel alloys (304L, 316L, 17-4)',
      'Diverse shape capabilities (channel, bar, sheet, angle, plate, tubing)',
      'Building, bending, punching, welding, and configuring services',
      'Supply chain optimization and integration',
      'Corrosion-resistant material expertise',
      'Industry-specific component solutions',
      'All quantities and sizes supported'
    ],
    specs: [
      {label:'Alloys Available', value:'304L, 316L, 17-4 Stainless Steel'},
      {label:'Shapes Supported', value:'Channel, Bar, Sheet, Angle, Plate, Tubing'},
      {label:'Capabilities', value:'Building, Bending, Punching, Welding, Configuring'},
      {label:'Industries Served', value:'Transportation, Wastewater, Clean Water, Building Components'}
    ],
    images: ['/the-art-and-science.png','/precision-metal-chain.png','/certified-welding.png']
  },
  {
    title: 'Aluminum Fabrication',
    slug: 'aluminum-fabrication',
    category: 'Fabrication & Erection',
    excerpt: 'Expert aluminum fabrication with casting, welding, milling, and precision machining for custom components and structures.',
    longDescription: [
      'SPE (Satnam Process Engineering) Manufacturing has decades of experience providing value-added aluminum fabrication services for the Punjab India area including other surrounding cities. We pride ourselves on integrating and expertly executing specialized processes including aluminum casting, welding, milling, precision machining, and finishing to prototype or fabricate any aluminum component or structure.',
      'Our customers bring us drawings, concepts, or CAD files, and our in-house aluminum fabricators have the capability to produce work to exact specifications. Because aluminum is difficult to use for fabrication but highly prized as a strong, lightweight, and highly corrosion-resistant material, custom aluminum fabrication requires specialized training and decades of experience to perfect. Aluminum is easy to shape but also strong and sturdy so it holds shape well.',
      'SPE (Satnam Process Engineering) Manufacturing is among the most qualified, knowledgeable custom full-service aluminum fabricators and is uniquely positioned to handle projects requiring almost any form of aluminum.'
    ],
    aluminum_series: [
      {series: '2000 Series Aluminum', description: 'High strength with excellent machinability for aerospace and mechanical applications.'},
      {series: '6000 Series Aluminum', description: 'Good corrosion resistance with moderate strength, ideal for structural and architectural applications.'},
      {series: '7000 Series Aluminum', description: 'Highest strength-to-weight ratio, primarily used in aerospace and high-performance applications.'}
    ],
    industries: [
      {title: 'Engineering', description: 'Fabricating complex aluminum components for engineering projects and mechanical systems.'},
      {title: 'Industrial Projects', description: 'Supporting industrial operations with custom aluminum structures and equipment components.'},
      {title: 'Marine', description: 'Providing corrosion-resistant aluminum solutions for marine and offshore applications.'},
      {title: 'General Construction', description: 'Supplying aluminum platforms, enclosures, and structural frames for construction projects.'}
    ],
    features: [
      'Aluminum casting and specialized processes',
      'Multiple aluminum series (2000, 6000, 7000)',
      'Welding, milling, and precision machining',
      'Custom finishing and surface treatment',
      'From prototype to production capability',
      'CAD to component expertise',
      'Lightweight yet strong solutions'
    ],
    specs: [
      {label:'Aluminum Series Available', value:'2000, 6000, 7000 Series'},
      {label:'Processes', value:'Casting, Welding, Milling, Precision Machining, Finishing'},
      {label:'Capabilities', value:'Prototyping to Production, Custom Components to Structural Frames'},
      {label:'Design Format', value:'Drawings, Concepts, CAD Files'}
    ],
    images: ['/the-art-and-science.png','/precision-metal-chain.png','/certified-welding.png']
  },
  {
    title: 'Carbon Steel Fabrication',
    slug: 'carbon-steel-fabrication',
    category: 'Fabrication & Erection',
    excerpt: 'Expert carbon steel fabrication from design to delivery with state-of-the-art machinery and certified welders.',
    longDescription: [
      'From design to delivery, SPE (Satnam Process Engineering) Manufacturing is one of the finest carbon steel fabricators anywhere. Our experience allows us to take raw steel and realize our customers\' designs for precise components and large structures. We combine our expertise and old-fashioned common sense with creative troubleshooting for custom projects to provide customers with carbon steel fabrication solutions of every kind.',
      'Carbon Steel Grades & Specifications: We offer our customers the following carbon steel specifications in all shapes and sizes - Mild steel, alloy steel, cast steel in all shapes and sizes.',
      'Each project is different, so we take a custom approach to each customer\'s distinct fabrication requirements. With in-house mills, lathes, welding stations, and other state-of-the-art machinery, SPE (Satnam Process Engineering) Manufacturing adheres to the industry\'s highest standards, bringing our customers excellent value-added results.',
      'Carbon steel is a popular choice for fabricating because it can be punched, welded, rolled, cut, riveted, finished, and painted while still maintaining extreme mechanical strength for a wide range of structures.',
      'In combination with many other in-house services and capabilities, SPE (Satnam Process Engineering) Manufacturing takes pride in providing expert custom fabrication to our Punjab India customers. Regardless of the scope or complexity of your project, our trusted professionals are ready to learn more about our metal fabrication services and how we can meet your needs.'
    ],
    steel_grades: [
      {grade: 'Mild Steel', description: 'Easy to work with, excellent for general fabrication and construction projects.'},
      {grade: 'Alloy Steel', description: 'Enhanced properties for increased strength and durability in demanding applications.'},
      {grade: 'Cast Steel', description: 'Ideal for custom shapes and complex geometric requirements.'}
    ],
    equipment: [
      'Hurco VMX50 4-Axis Vertical Mill (50" x 26" x 24" work envelope)',
      'Hurco VMX42 4-Axis Vertical Mill (42" x 24" x 24" work envelope)',
      'Hurcom VM3 Vertical Mill (50" x 18" x 18" work envelope)',
      'Hurco TM10 lathe with 10" chuck',
      'Whacheon lathe with 12" chuck',
      'FEMCO durga lathe with 8" chuck',
      '6 MIG and TIG welding stations',
      'Cobramatic aluminum Push-Pull station',
      '15" x 120" lathe',
      '12" x 80" lathe',
      'Vertical turret lathe (54" round x 24" tall, 50" swing)',
      '4 Knee mills',
      'Automatic cut-off/band saw',
      '90 ton ironworker',
      'HYD-MECH miter saw',
      '3 ton bridge crane',
      'Support equipment (forklifts, hand grinders)'
    ],
    features: [
      'Mild, alloy, and cast steel grades',
      'Complete custom fabrication services',
      'Punching, welding, rolling, cutting, riveting capabilities',
      'Finishing and painting services',
      'State-of-the-art machinery and equipment',
      'Extreme mechanical strength solutions',
      'Expert troubleshooting and design consultation'
    ],
    specs: [
      {label:'Steel Grades Available', value:'Mild Steel, Alloy Steel, Cast Steel'},
      {label:'Fabrication Methods', value:'Punching, Welding, Rolling, Cutting, Riveting'},
      {label:'Surface Treatment', value:'Finishing, Painting'},
      {label:'Equipment', value:'Mills, Lathes, Welding Stations, Saws, Cranes'}
    ],
    images: ['/the-art-and-science.png','/precision-metal-chain.png','/certified-welding.png']
  },
  {
    title: 'Structural Steel Fabrication',
    slug: 'structural-steel-fabrication',
    category: 'Fabrication & Erection',
    excerpt: 'Large-scale structural steel fabrication with decades of experience and complete in-house equipment for rigorous standards.',
    longDescription: [
      'As a leading structural fabricator of large-scale steel structures in Southern California, SPE (Satnam Process Engineering) Manufacturing has decades of experience and a complete line of in-house equipment to fully accommodate every structural steel fabrication project. From sourcing raw steel in the form of beams, columns, channels, bars, angles, plate, tubing, HSS, and other common steel standards to developing custom Weld Procedure Specifications (WPS), SPE creates corrosion-resistant and high-strength items of any size to rigorous standards.',
      'Structural Fabricator Expertise: A cost-effective, incredibly strong, and sustainable construction resource, structural steel fabrication is used to prototype and execute structures of lasting value with tight tolerances. SPE\'s expert California structural fabricators, MIG, TIG, and arc/stick welders assess a project\'s needs and efficiently execute each design to provide customers with products they can trust and rely on for years. For over three decades, we have serviced a variety of public and private industries with innovative and complete fabrication solutions for all of their structural steel fabrication service needs.',
      'Along with our full complement of manufacturing services, our customers can be confident that SPE will professionally implement any design regardless of scale or scope. We are here to serve you as your structural fabricator.'
    ],
    project_examples: [
      {client: 'Tractel Group', project: 'Fabricated structural steel components'},
      {client: 'Fluoresco Lighting Company', project: 'Structural steel lighting fixtures and frames'},
      {client: 'Burbank Fire Department', project: 'Structural steel components'},
      {client: 'Tri Alpha Energy', project: 'Structural components for advanced energy systems'},
      {client: 'Amonix', project: 'Structural steel components for the solar energy industry'}
    ],
    features: [
      'Large-scale structural steel fabrication',
      'Custom Weld Procedure Specifications (WPS)',
      'Multiple steel profiles (beams, columns, channels, bars, angles, plate, tubing, HSS)',
      'MIG, TIG, and arc/stick welding capabilities',
      'Corrosion-resistant and high-strength solutions',
      'Tight tolerance manufacturing',
      'Cost-effective and sustainable construction resource',
      'Expert California structural fabricators and welders',
      'Design implementation regardless of scale or scope'
    ],
    specs: [
      {label:'Steel Profiles Available', value:'Beams, Columns, Channels, Bars, Angles, Plate, Tubing, HSS'},
      {label:'Welding Methods', value:'MIG, TIG, Arc/Stick'},
      {label:'Quality Standards', value:'Custom WPS, Corrosion-resistant, High-strength'},
      {label:'Experience', value:'Over 30 years serving public and private industries'},
      {label:'Specialization', value:'Large-scale structures with tight tolerances'}
    ],
    images: ['/the-art-and-science.png','/precision-metal-chain.png','/certified-welding.png']
  },
  {
    title: 'Structural Fabrication',
    slug: 'structural-fabrication',
    category: 'Fabrication & Erection',
    excerpt: 'Heavy and light structural fabrication with certified weld procedures.',
    images: ['/certified-welding.png']
  },
  {
    title: 'Heat Exchangers',
    slug: 'heat-exchangers',
    category: 'Process Equipment',
    excerpt: 'Custom shell & tube, plate and specialized exchangers.',
    images: ['/the-art-and-science.png']
  },
  {
    title: 'EPCC Projects',
    slug: 'epcc-projects',
    category: 'Turnkey Contracting',
    excerpt: 'End-to-end project delivery with single-point responsibility.',
    images: ['/precision-metal-chain.png']
  },
  {
    title: 'Planned Maintenance',
    slug: 'planned-maintenance',
    category: 'Maintenance & Support',
    excerpt: 'Scheduled shutdown and preventive maintenance programs.',
    images: ['/certified-welding.png']
  }
];

async function run() {
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    console.error('Set MONGODB_URI environment variable before running seed script.');
    process.exit(1);
  }

  // Mongoose (modern drivers) no longer needs legacy options
  await mongoose.connect(MONGODB_URI);
  const db = mongoose.connection;

  try {
    console.log('Connected to DB. Clearing existing services...');
    await db.collection('services').deleteMany({});
    console.log('Inserting services...');
    await db.collection('services').insertMany(services.map(s => ({ ...s, createdAt: new Date() })));
    console.log('Seed complete.');
  } catch (err) {
    console.error('Seed error:', err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

run();