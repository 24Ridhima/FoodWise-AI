async function getResponse() {

    let input = document.getElementById("userInput").value;

    let responseBox = document.getElementById("response");

    responseBox.innerHTML = "Thinking... 🤖";

    const apiKey = "AQ.Ab8RN6LhBVUL3GB0Q-XjoE-mI92jIQPkR6ii0HH06vaALrzD4Q";

    const prompt = `
You are FoodWise AI.

Your job is to help reduce food waste.

User input (ingredients or food item): ${input}

Give:
- 2 meal ideas
- 1 storage tip
- 1 waste reduction tip

Keep response short and simple.
`;

    try {
        const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                { text: prompt }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await res.json();

        let aiText = data.candidates[0].content.parts[0].text;

        responseBox.innerHTML = aiText;

    } catch (error) {
        responseBox.innerHTML = "Error connecting to AI. Please try again.";
    }
}
