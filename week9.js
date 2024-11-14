const week9 = {
    upperBody: {
        name: "Upper Body",
        circuits: [
            {
                name: "Circuit 1",
                rounds: 4,
                exercises: [
                    "Flat barbell bench press x 10 reps",
                    "Push ups x 10 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 4,
                exercises: [
                    "Reverse grip barbell row x 10 reps",
                    "Wide pull up x 10 reps"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 3,
                exercises: [
                    "Incline DB bench press x 10 reps",
                    "Incline DB flys x 10 reps"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 3,
                exercises: [
                    "DB row x 10 reps",
                    "Seated row x 10 reps"
                ]
            },
            {
                name: "Circuit 5",
                rounds: 3,
                exercises: [
                    "Barbell shoulder press x 10 reps",
                    "Dips x 15 reps"
                ]
            },
            {
                name: "Circuit 6",
                rounds: 3,
                exercises: [
                    "DB reverse flys x 15 reps",
                    "Cable Face pull x 15 reps"
                ]
            },
            {
                name: "Circuit 7",
                rounds: 3,
                exercises: [
                    "Chin ups x 10 reps",
                    "Alternating DB hammer curls x 10 reps"
                ]
            }
        ]
    },
    lowerBody: {
        name: "Lower Body",
        mainCircuit: {
            name: "Circuit",
            note: "straight through",
            exercises: [
                "Wall sit x 1 minute",
                "Prisoners squats x 20 reps",
                "Lunge jumps (2 as 1) x 20 reps",
                "Calf raises x 20 reps",
                "Single leg hip thrust Right x 15 reps",
                "Single leg hip thrust Left x 15 reps",
                "Nordic quads x 10 reps",
                "Achilles raises x 15 reps",
                "Split squat jumps x 15 each leg",
                "Bodyweight hamstring curl x 10 reps",
                "VMO squats on toes x 15 reps",
                "ATG split squats x 8 each leg"
            ]
        }
    },
    core: {
        name: "Core",
        note: "Complete all exercises",
        exercises: [
            "Weighted high plank feet on box x 40-50 seconds",
            "Dragon flag x 10 reps",
            "TRX Low plank x 40-50 seconds",
            "Barbell rollouts x 10 reps",
            "Swiss ball superman plank (legs on ball) x 40 seconds",
            "Hanging knee raises x 12 reps",
            "V-sit + DB shoulder press x 50 seconds",
            "Hollow rocks x 15 reps",
            "Crunches x 30 reps",
            "KB situps x 20 reps",
            "Reverse crunch x 15 reps",
            "Back extensions x 20 reps",
            "Paloff press + anti lateral flexion right and left"
        ]
    },
    fullBody: {
        name: "Full Body",
        warmup: {
            rounds: 2,
            exercises: [
                "Assault bike x 1 minute",
                "Row x 1 minute"
            ]
        },
        circuits: [
            {
                name: "Circuit 1",
                note: "10-9-8-7-6-5-4-3-2-1",
                exercises: [
                    "Barbell hang clean",
                    "Barbell push press",
                    "Barbell deadlifts",
                    "Burpees"
                ]
            },
            {
                name: "Circuit 2",
                note: "14 to 9",
                exercises: [
                    "DB thrusters",
                    "DB plank row (1 is 1)",
                    "DB double snatches"
                ]
            },
            {
                name: "Circuit 3",
                note: "14 to 9",
                exercises: [
                    "KB swings",
                    "Box jump overs"
                ]
            },
            {
                name: "Circuit 4",
                note: "14 to 9",
                exercises: [
                    "KB Russian twists (8-10kg, 2 as 1)",
                    "GHD Weighted situps"
                ]
            }
        ]
    }
};
