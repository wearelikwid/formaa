const week10 = {
    upperBody: {
        name: "Upper Body",
        circuits: [
            {
                name: "Circuit 1",
                exercises: [
                    "Barbell Bench press (15-12-10-8 reps)",
                    "Decline push ups x 8-10 reps",
                    "Reverse grip barbell row (15-12-10-8 reps)",
                    "Neutral pull ups x 8 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 3,
                exercises: [
                    "Chest fly machine x 10 reps",
                    "Cable Seated row x 10 reps"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 3,
                exercises: [
                    "DB shoulder press x 10 reps",
                    "DB alternating bicep curls x 10 reps"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 3,
                exercises: [
                    {
                        name: "DB shoulder complex",
                        movements: [
                            "Front raises x 8 reps",
                            "Side raises x 8 reps",
                            "Upright row x 8 reps"
                        ]
                    }
                ]
            },
            {
                name: "Circuit 5",
                rounds: 3,
                exercises: [
                    "Reverse delt fly machine x 10 reps"
                ]
            },
            {
                name: "Circuit 6",
                rounds: 3,
                exercises: [
                    "Cable tricep extension x 10 reps",
                    "Dips x 12-15 reps"
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
                    "Jump squats x 15 reps",
                    "Cossack squats x 20 reps (10 each side)",
                    "Split squat jumps x 15 each leg"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 3,
                exercises: [
                    "Single leg balance hold x 30 sec each side",
                    "Pistol squat progressions x 10 each leg",
                    "Matrix lunges (5 each direction, each leg) x 20 total"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 4,
                exercises: [
                    "Natural leg extensions x 15 reps",
                    "Sliding hamstring curls x 12 reps",
                    "Speed skater jumps x 20 reps"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 3,
                exercises: [
                    "Box jumps x 30 reps",
                    "Lateral bounds x 20 (10 each side)",
                    "Single leg calf raises x 15 each leg"
                ]
            }
        ]
    },
    core: {
        name: "Core",
        warmup: {
            rounds: 3,
            exercises: [
                "Low plank x 1 minute",
                "Side plank right x 1 minute",
                "Side plank left x 1 minute"
            ]
        },
        mainCircuit: {
            rounds: 4,
            exercises: [
                "Tuck situps x 25 reps",
                "TRX high plank tuck+pike x 20 reps",
                "Pike situps x 20 reps",
                "Hollow rocks x 30 seconds + hold x 30 seconds",
                "Back extensions x 30 reps",
                "Reverse plank x 50 seconds",
                "Knee raises x 15 reps",
                "Alternate toe touches x 20 reps",
                "KB Russian twist (2 as 1) x 20 reps",
                "Wipers (1 is 1) x 20 reps",
                "Side plank dips x 15 each side"
            ]
        },
        finishingPyramid: {
            name: "Crunches / Back Extensions",
            sets: [
                "50/50",
                "40/40",
                "30/30",
                "20/20",
                "10/10"
            ]
        }
    },
    fullBody: {
        name: "Full Body",
        circuits: [
            {
                name: "Circuit 1",
                rounds: 5,
                exercises: [
                    "Row x 40 seconds",
                    "Wall balls (9 or 12kg) x 15 reps",
                    "Side kick through (2 as 1) x 15 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 4,
                exercises: [
                    "Full burpees x 5 reps",
                    "KB thrusters (16kg) x 8 reps",
                    "KB swing (24kg) x 12 reps"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 4,
                exercises: [
                    "DB man makers (12.5 or 15kg) x 8 reps",
                    "DB front squat x 8 reps",
                    "DB single snatch (8 right, 8 left)"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 4,
                exercises: [
                    "Barbell squat clean (40/45kg) x 8 reps",
                    "Toes to bar x 8 reps",
                    "Ski erg x 40 seconds"
                ]
            }
        ]
    }
};
