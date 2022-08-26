let arr = [
	{
		doctorId: 1,
		startTime: "5:00",
		weekday: "Monday",
		endTime: "8:00",
		createdAt: "new Date()",
		updatedAt: "new Date()"
	},
	{
		doctorId: 1,
		startTime: "5:00",
		endTime: "8:00",
		weekday: "Tuesday",
		createdAt: "new Date()",
		updatedAt: "new Date()"
	},
	{
		doctorId: 1,
		startTime: "5:00",
		endTime: "8:00",
		weekday: "Wednesday",
		createdAt: "new Date()",
		updatedAt: "new Date()"
	}
];

for (let i = 3; i < 34; i++) {
	console.log(
		`{
			doctorId: ${i},
			startTime: "5:00",
			weekday: "Monday",
			endTime: "8:00",
			createdAt: "new Date()",
			updatedAt: "new Date()"
		},
		{
			doctorId: ${i},
			startTime: "5:00",
			endTime: "8:00",
			weekday: "Tuesday",
			createdAt: "new Date()",
			updatedAt: "new Date()"
		},
		{
			doctorId: ${i},
			startTime: "5:00",
			endTime: "8:00",
			weekday: "Wednesday",
			createdAt: "new Date()",
			updatedAt: "new Date()"
		}`
	);
}
