const week6 = {
    upperBody: {
        name: "Upper Body",
        circuits: [
            {
                name: "Circuit 1",
                rounds: 4,
                exercises: [
                    "DB high plank alternating row (15kg) x 10 reps",
                    "DB front squat (12.5-15kg) x 10 reps",
                    "DB snatch (12.5/15kg) x 10 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 4,
                note: "descending 15-12-10-8 reps",
                exercises: [
                    "Flat barbell bench press",
                    "Reverse grip barbell row"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 3,
                exercises: [
                    "Incline DB bench press x 10 reps",
                    "DB row x 10 reps"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 4,
                exercises: [
                    "Lat pull down x 10 reps",
                    "Chest fly machine x 10 reps"
                ]
            },
            {
                name: "Circuit 5",
                rounds: 4,
                exercises: [
                    "Seated row x 10 reps",
                    "Incline pushups reverse grip x 15 reps"
                ]
            }
        ]
    },
    lowerBody: {
        name: "Lower Body",
        circuits: [
            {
                name: "Circuit 1",
                rounds: 4,
                exercises: [
                    "Single leg hamstring curl machine x 12 reps each leg",
                    "Calf raises machine x 15 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 2,
                exercises: [
                    "Sled push & pull"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 5,
                note: "progressive weight (60kg-70-75-80-90) x 12-10 reps",
                exercises: [
                    "Back squat"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 4,
                exercises: [
                    "Romanian deadlift (70-90kg) x 10 reps"
                ]
            },
            {
                name: "Circuit 5",
                rounds: 3,
                exercises: [
                    "Walking lunges with bar 40kg (2 as 1) x 12 steps"
                ]
            },
            {
                name: "Circuit 6",
                rounds: 3,
                exercises: [
                    "Hip thrusters machine x 10 reps"
                ]
            }
        ]
    },
    core: {
        name: "Core",
        circuits: [
            {
                name: "Circuit 1",
                rounds: 4,
                exercises: [
                    "Right side crunches on low back machine (10kg) x 10 reps",
                    "Left side crunches x 10 reps",
                    "Wipers (2 as 1) x 10 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 4,
                exercises: [
                    "TRX low plank alternate knee to elbow x 50 seconds",
                    "Situps x 20 reps",
                    "Hollow rocks x 10 reps"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 4,
                exercises: [
                    "TRX superman plank (hands on TRX) x 40 seconds",
                    "Roll outs x 10 reps",
                    "Hanging leg raises x 10 reps"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 4,
                exercises: [
                    "Back extension machine (10kg) x 15 reps",
                    "Reverse plank x 30 seconds"
                ]
            }
        ]
    },
    fullBody: {
        name: "Full Body",
        warmup: {
            name: "Warm-up",
            exercises: [
                "Rope x 3 minutes"
            ],
            circuit: {
                duration: "3 minutes",
                exercises: [
                    "Plank pushups x 3 reps",
                    "Half burpees x 3 reps",
                    "Squats x 3 reps"
                ]
            }
        },
        mainCircuit: {
            name: "Barbell Complex",
            rounds: 4,
            note: "8x8 format (8 reps each) - 30-35-37.5kg, Rest: 2-3 minutes between rounds",
            exercises: [
                "Rollout",
                "Pushups on bar",
                "Deadlift",
                "Rows",
                "Hang clean",
                "Push press",
                "Squats",
                "Front lunges"
            ]
        }
    }
};
