const week2 = {
    upperBody: {
        name: "Upper Body",
        circuits: [
            {
                name: "Complete 4 rounds",
                rounds: 4,
                exercises: [
                    "Diamond pushups x 15 reps",
                    "TRX row x 12 reps",
                    "Chin ups x 10 reps", 
                    "Reverse grip pushups x 15 reps",
                    "Incline Dumbbell chest press x 10 reps",
                    "Reverse grip bar row x 10 reps",
                    "Neutral pull up x 10 reps",
                    "Dips x 15 reps",
                    "DB Shoulder press x 10 reps",
                    "Alternating bicep hammer curl x 10 reps",
                    "DB side/front shoulder raises x 10 reps",
                    "DB upright row x 10 reps",
                    "Rear delt fly machine x 10 reps"
                ]
            }
        ]
    },
    lowerBody: {
        name: "Lower Body",
        warmup: {
            name: "Warm-up",
            exercises: [
                "Rope x 3 minutes",
                "2 rounds with 10kg plate or DB:",
                "- Squat jumps x 10 reps",
                "- Reverse lunges (1 is 1) x 10 reps"
            ]
        },
        circuits: [
            {
                name: "Circuit 1",
                rounds: 4,
                exercises: [
                    "Single leg hamstring curl machine x 12 reps",
                    "Calf machine x 12 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 4,
                note: "15,12,10,10 reps",
                exercises: [
                    "Hack squat machine",
                    "Romanian deadlift"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 4,
                exercises: [
                    "Zercher squat/heel elevated front squats x 10 reps",
                    "Hip thrusters x 10 reps"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 4,
                exercises: [
                    "Bulgarian split squat x 10 each leg"
                ]
            },
            {
                name: "Circuit 5",
                rounds: 4,
                exercises: [
                    "Adductor machine x 12 reps",
                    "Achilles raises x 12 reps"
                ]
            }
        ]
    },
    core: {
        name: "Core",
        exercises: [
            "Crunches x 40 reps",
            "Right side crunches x 30 reps",
            "Left side crunches x 30 reps",
            "Tuck situp x 20 reps",
            "Low plank x 1:30 minutes",
            "Weighted situps on GHD machine x 15 reps",
            "Weighted low plank (10kg) x 40 seconds",
            "Hollow rocks x 15 reps",
            "L-sit x 30 seconds",
            "Roll outs with bar x 10 reps",
            "TRX high plank (hands in TRX) x 40 seconds",
            "Hanging leg raises x 15 reps",
            "Reverse crunch x 15 reps",
            "Wipers x 10 reps",
            "Side plank dips Right x 15 reps",
            "Side plank dips Left x 15 reps",
            "Russian twists x 15 reps"
        ]
    },
    fullBody: {
        name: "Full Body",
        warmup: {
            name: "Warm-up",
            type: "AMRAP",
            time: "3 minutes",
            exercises: [
                "Push-ups x 3 reps",
                "Half burpee x 3 reps",
                "Squat jumps x 3 reps"
            ]
        },
        circuits: [
            {
                name: "Circuit 1",
                type: "AMRAP",
                time: "12 minutes",
                exercises: [
                    "Burpees x 5 reps",
                    "KB thrusters (12kg x2) x 8 reps",
                    "KB swing (20-24kg) x 12 reps"
                ]
            },
            {
                name: "Circuit 2",
                type: "AMRAP",
                time: "12 minutes",
                exercises: [
                    "DB burpees (12.5kg x2) x 8 reps",
                    "DB plank row (1 is 1) (12.5kg) x 10 reps",
                    "DB double snatch (12.5 or 15kg) x 12 reps"
                ]
            },
            {
                name: "Circuit 3",
                type: "AMRAP",
                time: "12 minutes",
                exercises: [
                    "Slam ball (35 lbs) x 10 reps",
                    "Wall ball (20 lbs) x 15 reps",
                    "Side kick through x 20 reps"
                ]
            }
        ]
    }
};
