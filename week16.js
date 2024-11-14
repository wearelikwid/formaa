const week16 = {
    upperBody: {
        name: "Upper Body",
        sections: [
            {
                name: "Superset 1",
                rounds: 4,
                exercises: [
                    "Weighted chin-ups (+10kg) x 10 reps",
                    "Decline diamond push-ups x 15 reps"
                ]
            },
            {
                name: "Superset 2",
                rounds: 4,
                exercises: [
                    "Ring archer push-ups x 12 reps",
                    "One arm rows (each side) x 10 reps"
                ]
            },
            {
                name: "Circuit",
                rounds: 3,
                exercises: [
                    "90-degree push-ups x 10 reps",
                    "Pull-ups + explosive pull-ups x 12 + 4 reps",
                    "Ring Y-raises x 15 reps",
                    "Ring turned out dips x 12 reps"
                ]
            }
        ]
    },
    lowerBody: {
        name: "Lower Body",
        sections: [
            {
                name: "Athletic Prep",
                rounds: 3,
                exercises: [
                    "Multi-directional hops x 30 sec",
                    "Lateral shuffle with sprint x 20 meters",
                    "Backward run to forward sprint"
                ]
            },
            {
                name: "Power Sequence",
                rounds: 4,
                exercises: [
                    "Drop squat to jump x 8 reps",
                    "Alternating bound lunges x 12 reps",
                    "180-degree jump squats x 15 reps"
                ]
            },
            {
                name: "Balance Challenge",
                rounds: 3,
                exercises: [
                    "Single-leg deadlift to backward hop x 10 each",
                    "Walking single-leg squat touches",
                    "Lateral lunge to curtsy x 12 each side"
                ]
            },
            {
                name: "Finisher",
                description: "EMOM for 10 minutes",
                exercises: {
                    oddMinutes: "Jump squats x 15 reps",
                    evenMinutes: "Split jumps x 20 reps"
                }
            }
        ]
    },
    core: {
        name: "Core",
        sections: [
            {
                name: "Time-based Circuit",
                description: "40 seconds on/20 seconds off, 3 rounds",
                exercises: [
                    "Ring support hold to RTO",
                    "Plank reach and pull",
                    "Figure-8 leg raises",
                    "Side plank with leg lift",
                    "Ab wheel knee tuck to rollout",
                    "Dragon flag progressions"
                ]
            },
            {
                name: "Strength Focus",
                rounds: 3,
                exercises: [
                    "Weighted decline reverse crunch (+5kg) x 12 reps",
                    "Single-arm plank with row x 15 reps",
                    "Jefferson curl to hollow body x 10 reps",
                    "Russian twist with press x 20 reps"
                ]
            }
        ]
    },
    fullBody: {
        name: "Full Body",
        sections: [
            {
                name: "Every 3 minutes for 15 minutes",
                exercises: [
                    "Dumbbell thrusters x 10 reps",
                    "Kettlebell swings x 12 reps",
                    "Burpees x 8 reps"
                ]
            },
            {
                name: "Circuit",
                rounds: 3,
                exercises: [
                    "Ball slams x 15 reps",
                    "Push-ups x 12 reps",
                    "Walking lunges x 20 reps"
                ]
            },
            {
                name: "Finisher",
                description: "1 minute each",
                exercises: [
                    "Plank hold",
                    "Jump rope",
                    "Squat hold"
                ]
            }
        ]
    }
};
