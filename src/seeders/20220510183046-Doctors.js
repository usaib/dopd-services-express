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
			"doctors",
			[
				{
					name: "Anees Allana",
					email: "anees@gmail.com",
					specialization: "ENT Specialist",
					qualification: "MBBS FCPS",
					experience: "12",
					rating: "4.5",
					gender: "Male",
					imageUrl:
						"https://health.hamariweb.com/Images/DocImages/Dr-Anis-A-Allana_65514.jpeg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Smart",
					email: "admin@dop.com",
					specialization: "MDT",
					qualification: "MDT",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Salman Mansoor",
					email: "salmanmansoor@gmail.com",
					specialization: "Skin Specialist",
					qualification: "MBBS, D Derm",
					experience: "12",
					rating: "4.5",
					gender: "Male",
					imageUrl: "https://theskin.com.pk/assets/img/gallery/work3.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Ahmed Rabb",
					email: "salmanmansoor@gmail.com",
					specialization: "Skin Specialist",
					qualification: "MBBS, MHSC",
					experience: "27",
					rating: "4.1",
					gender: "Male",
					imageUrl:
						"https://d3313lwq5y3sh2.cloudfront.net/assets/photos/000/236/211/original/Dr__Ahmad_Rabb.png?1601911671",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Zafar Ahmed",
					email: "ZafarAhmed@gmail.com",
					specialization: "Skin Specialist",
					qualification: "MBBS, CRCP",
					experience: "24",
					rating: "4.2",
					gender: "Male",
					imageUrl:
						"https://d3313lwq5y3sh2.cloudfront.net/assets/photos/000/327/665/original/dr_zafar_Ahmed.jpeg?1657888621",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Sumera Memon",
					email: "sumeramemon@gmail.com",
					specialization: "Skin Specialist",
					qualification: "MBBS, Dip. Dermatology",
					experience: "9",
					rating: "4.7",
					gender: "Female",
					imageUrl:
						"https://alsehhat.com/wp-content/uploads/2019/08/Dr-Aisha-Humaira-150x150.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Erum Memon",
					email: "erummemon@gmail.com",
					specialization: "Gynecologist",
					qualification: "MBBS, FCPS",
					experience: "15",
					rating: "4.8",
					gender: "Female",
					imageUrl: "https://www.jamalnoorhospital.com/images/doctors/erum.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Nilofur Alvi",
					email: "nilofuralvi@gmail.com",
					specialization: "Gynecologist",
					qualification: "MBBS, MCPS",
					experience: "20",
					rating: "4.2",
					gender: "Female",
					imageUrl:
						"https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/1601271284_doc_female_orig.png",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Mabel Zaki",
					email: "mabelzaki@gmail.com",
					specialization: "Gynecologist",
					qualification: "MBBS, MCPS",
					experience: "20",
					rating: "4.2",
					gender: "Female",
					imageUrl:
						"https://apiv1.lnh.edu.pk///api/Provider/Image/180/99d2ab05-cda7-4173-8a95-88e65a4f3a83.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Faheem Ghori",
					email: "faheemghori@gmail.com",
					specialization: "Orthopedic Surgeon",
					qualification: "MBBS, FCPS",
					experience: "6",
					rating: "5",
					gender: "Male",
					imageUrl: "https://ntu.edu.pk/uploaded_images/emp_pics/878.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Mohammad Jamil",
					email: "mohdjamil@gmail.com",
					specialization: "Orthopedic Surgeon",
					qualification: "MBBS, FCPS",
					experience: "9",
					rating: "5",
					gender: "Male",
					imageUrl:
						"https://y3p8x5u4.rocketcdn.me/wp-content/uploads/2018/10/drahmad-sm.png",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Javaid Aqeel Rajput",
					email: "javaidaqeel@gmail.com",
					specialization: "Urologist",
					qualification: "MBBS, FCPS",
					experience: "28",
					rating: "4.9",
					gender: "Male",
					imageUrl:
						"https://aohospital.com.pk/wp-content/uploads/2020/01/Dr-qaiser-sajjad.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Tanveer Ahmed",
					email: "tanveerahmed@gmail.com",
					specialization: "Urologist",
					qualification: "MBBS, MCPS",
					experience: "10",
					rating: "4.8",
					gender: "Male",
					imageUrl:
						"https://content3.jdmagicbox.com/comp/bareilly/s2/9999px581.x581.200522105428.z8s2/catalogue/dr-tanveer-ahmed-bareilly-city-bareilly-dermatologists-kzx2x0aad8.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Mohammad Imran Malik",
					email: "mohdimranmalik@gmail.com",
					specialization: "Urologist",
					qualification: "MBBS, FCPS",
					experience: "8",
					rating: "4.8",
					gender: "Male",
					imageUrl: "http://pprs.org.pk/events/speakers/imran_malik.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Iqbal Hussain",
					email: "iqbalhussain@gmail.com",
					specialization: "ENT Specialist",
					qualification: "MBBS, FCPS",
					experience: "32",
					rating: "4.9",
					gender: "Male",
					imageUrl:
						"http://bahria.edu.pk/bumdc/wp-content/uploads/2016/11/iqbal.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Rajesh Vasandani",
					email: "rajeshvasandani@gmail.com",
					specialization: "ENT Specialist",
					qualification: "MBBS, FCPS",
					experience: "14",
					rating: "5",
					gender: "Male",
					imageUrl:
						"https://www.gsb.stanford.edu/sites/default/files/msx-fellow/JF6_3808-Raj-Vasandani-Edit.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Zafar Mahmood",
					email: "zafarmahmood@gmail.com",
					specialization: "ENT Specialist",
					qualification: "MBBS, FCPS",
					experience: "18",
					rating: "4.8",
					gender: "Male",
					imageUrl:
						"https://d3313lwq5y3sh2.cloudfront.net/assets/photos/000/364/650/original/zafarmahmood-1.jpg?1611815451",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Ibrahim Yusuf",
					email: "ibrahimyusuf@gmail.com",
					specialization: "Child Specialist",
					qualification: "MBBS, DCH",
					experience: "20",
					rating: "4.7",
					gender: "Male",
					imageUrl:
						"https://www.doctorwala.com/wp-content/uploads/2019/09/1555595166_ibrahim-yosuf.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Shahzaib M. Khan",
					email: "shahzaibkhan@gmail.com",
					specialization: "Child Specialist",
					qualification: "MBBS, MD",
					experience: "8",
					rating: "4.6",
					gender: "Male",
					imageUrl:
						"https://images1-fabric.practo.com/dr-vijay-ramchandran-1469080743-579064a7b5aae.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Neel Kanth",
					email: "ibrahimyusuf@gmail.com",
					specialization: "Child Specialist",
					qualification: "MBBS, DCH",
					experience: "35",
					rating: "4.6",
					gender: "Male",
					imageUrl:
						"https://images.drlogy.com/assets/uploads/img/practice-profile/doctors/photo/dr-neelkant-warad-fbf440371ad-288cb2e649e.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Ambreen Raza",
					email: "ambreenraza@gmail.com",
					specialization: "Child Specialist",
					qualification: "MBBS, FCPS",
					experience: "7",
					rating: "3.5",
					gender: "Female",
					imageUrl:
						"https://pbs.twimg.com/profile_images/1105304384483684352/5q0UtVBU_400x400.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Wajid Jawaid",
					email: "wajidjawaid@gmail.com",
					specialization: "Neurologist",
					qualification: "MBBS, FCPS",
					experience: "8",
					rating: "5",
					gender: "Male",
					imageUrl:
						"https://staticconnect.marham.pk/assets/doctors/9879/dr-wajid-jawaid-neurologist-karachi-47_450X450.png",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Monika Kumari",
					email: "monikakumari@gmail.com",
					specialization: "Neurologist",
					qualification: "MBBS, FCPS",
					experience: "11",
					rating: "5",
					gender: "Female",
					imageUrl:
						"https://pbs.twimg.com/profile_images/1186166205586952192/cRU0-fCs_400x400.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Jay Singh Rana",
					email: "jaysingh@gmail.com",
					specialization: "Neurologist",
					qualification: "MBBS, FCPS",
					experience: "8",
					rating: "4.9",
					gender: "Male",
					imageUrl:
						"https://staticconnect.marham.pk/assets/doctors/25516/dr-jay-singh-neurologist-karachi-33_450X450.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Asma Niaz",
					email: "asmaniaz@gmail.com",
					specialization: "Neurologist",
					qualification: "MBBS, FCPS",
					experience: "17",
					rating: "4.3",
					gender: "Female",
					imageUrl:
						"https://tuf.edu.pk/Main/frontend/images/faculty/2021/1639155349.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Mohsina Syed",
					email: "mohsinasyed@gmail.com",
					specialization: "Neurologist",
					qualification: "MBBS, FCPS",
					experience: "8",
					rating: "5",
					gender: "Female",
					imageUrl:
						"https://staticconnect.marham.pk/assets/doctors/25358/dr-mishal-saleem-medical-specialist-wah-cantt-10_450X450.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Shagufta Mazhar",
					email: "shaguftamazhar@gmail.com",
					specialization: "General Physician",
					qualification: "MBBS, MCPS",
					experience: "17",
					rating: "5",
					gender: "Female",
					imageUrl:
						"https://fui.edu.pk/sites/default/files/gbb-uploads/ORIC300x250-1.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Aijaz Ahmed",
					email: "aijazahmed@gmail.com",
					specialization: "General Physician",
					qualification: "MBBS, MCPS",
					experience: "20",
					rating: "4.8",
					gender: "Male",
					imageUrl:
						"https://health.hamariweb.com/Images/DocImages/Dr-Aijaz-Ahmed_31110.jpeg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Sikandar Shamsi",
					email: "sikandarshamsi@gmail.com",
					specialization: "Eye Specialist",
					qualification: "MBBS, MCPS",
					experience: "37",
					rating: "5",
					gender: "Male",
					imageUrl:
						"https://assets.lybrate.com/img/documents/doctor/dp/14945a84be0061cbdfc830e617cac6f3/Ophthalmology-AsimKumarKandar-Kolkata-ce264f.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Tanveer Anjum",
					email: "tanveeranjum@gmail.com",
					specialization: "Eye Specialist",
					qualification: "MBBS, MCPS",
					experience: "33",
					rating: "4.8",
					gender: "Male",
					imageUrl:
						"http://southcityhospital.org/images/dr_tanveer_chaudhry.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Syed Ali Haider",
					email: "syedalihaider@gmail.com",
					specialization: "Heart Specialist",
					qualification: "MBBS, MCPS",
					experience: "42",
					rating: "4.9",
					gender: "Male",
					imageUrl:
						"https://faculty.mdanderson.org/content/dam/mdanderson/images/fis/ali_haider.jpg.resize.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Abdul Hafeez",
					email: "abdulhafeez@gmail.com",
					specialization: "Heart Specialist",
					qualification: "MBBS, Dip. in Cardiology",
					experience: "12",
					rating: "5",
					gender: "Male",
					imageUrl:
						"https://img.dunyanews.tv/news/2019/April/04-20-19/news_big_images/487900_19861968.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Anwaar Bawani",
					email: "anwaarbawani@gmail.com",
					specialization: "Dentist",
					qualification: "B.D.S, R.D.S.C",
					experience: "4",
					rating: "4.6",
					gender: "Male",
					imageUrl: "https://static.marham.pk/assets/images/similar.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Pooja Balani",
					email: "poojabalani@gmail.com",
					specialization: "Dentist",
					qualification: "B.D.S, R.D.S.C",
					experience: "7",
					rating: "5",
					gender: "Female",
					imageUrl:
						"https://web.northeastern.edu/adc/wp-content/uploads/2014/01/poojabalani.jpg",
					createdAt: new Date(),
					updatedAt: new Date()
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
	}
};
