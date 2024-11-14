const week5 = {
    upperBody: {
        name: "Upper Body",
        note: "Complete all exercises with descending reps (15-12-10-10)",
        exercises: [
            "DB row",
            "Incline DB chest press (DB parallel)",
            "Bar bench press flat",
            "Cable seated row", 
            "Lat pull down narrow grip",
            "Incline DB chest flys",
            "Row barbell reverse grip",
            "Pushups"
        ]
    },
    lowerBody: {
        name: "Lower Body",
        emom: {
            name: "EMOM",
            duration: "10 minutes",
            exercises: [
                "Minute 1: Wall balls x 12 reps",
                "Minute 2: Thrusters x 12 reps"
            ]
        },
        circuits: [
            {
                name: "Circuit Pair 1",
                exercises: [
                    "Deadlift x 10 reps",
                    "Pull ups x 8 reps"
                ]
            },
            {
                name: "Circuit Pair 2",
                exercises: [
                    "DB double snatches (12.5-15kg) x 12 reps",
                    "Toe to bar x 8-10 reps"
                ]
            },
            {
                name: "Circuit Pair 3",
                exercises: [
                    "Heavy sled push rayh rage3",
                    "Burpees x 8 reps"
                ]
            },
            {
                name: "Circuit Pair 4",
                exercises: [
                    "Trap farmers walk 80kg rayh rage3",
                    "Double unders x 25 reps"
                ]
            }
        ]
    },
    core: {
        name: "Core",
        circuits: [
            {
                name: "Circuit 1",
                rounds: 3,
                exercises: [
                    "Situp x 15 reps",
                    "Hollow rocks x 15 reps",
                    "Weighted low plank (10kg plate) x 40 seconds",
                    "Hanging knee raises x 10 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 3,
                exercises: [
                    "Side plank dip Right x 15 reps",
                    "Side plank dip Left x 15 reps",
                    "KB Russian twists (10-12kg) x 15 reps"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 3,
                exercises: [
                    "Toe touches x 20 reps",
                    "Flutter kicks x 15 reps",
                    "Wipers x 10 reps"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 3,
                note: "on back extension machine",
                exercises: [
                    "Back extensions (10kg) x 10 reps",
                    "Side crunches left (10kg) x 10 reps",
                    "Side crunches right (10kg) x 10 reps"
                ]
            },
            {
                name: "Circuit 5",
                rounds: 3,
                exercises: [
                    "Cable rotations x 10 reps",
                    "Anti-rotation press x 10 reps each side"
                ]
            }
        ]
    },
    fullBody: {
        name: "Full Body",
        warmup: {
            name: "Warm-up",
            exercises: [
                "Running x 2 laps"
            ],
            circuit: {
                rounds: 3,
                exercises: [
                    "Push-up jacks x 8 reps",
                    "Half burpee x 8 reps", 
                    "Squat jumps x 8 reps"
                ]
            }
        },
        circuits: [
            {
                name: "Circuit 1",
                rounds: 4,
                note: "Barbell work (35-40kg)",
                exercises: [
                    "Barbell row to deadlift x 10 reps",
                    "Barbell hang clean x 10 reps",
                    "Barbell push press x 10 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 4,
                exercises: [
                    "KB swings x 20 reps",
                    "Heavy slam ball x 15 reps",
                    "Burpee star jump x 10 reps"
                ]
            }
        ]
    }
};
