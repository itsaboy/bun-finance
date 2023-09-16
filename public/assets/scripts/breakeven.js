// main container
const breakevenContainer = document.createElement('div');
breakevenContainer.setAttribute("class", "breakeven-container");

const renderBreakeven = () => {
    breakevenContainer.querySelectorAll('*').forEach(n => n.remove());
    // input
    const sectionOne = document.createElement("section");
    sectionOne.setAttribute("id", "section-one");
    sectionOne.setAttribute("class", "bg-slate-300 border border-slate-900 rounded-lg shadow-lg");

    // section one container
    const sectionOneContainer = document.createElement("div");
    sectionOneContainer.setAttribute("class", "section-one-container relative");

    // section one items
    const tickerLabel = document.createElement("label");
    tickerLabel.setAttribute("id", "ticker-label");
    tickerLabel.setAttribute("for", "ticker-input");
    tickerLabel.setAttribute("class", "text-xl font-semibold");
    tickerLabel.textContent = "Ticker Symbol";

    const tickerInput = document.createElement("input");
    tickerInput.setAttribute("id", "ticker-input");
    tickerInput.setAttribute("class", "bg-slate-100 w-32 text-center text-lg px-2 py-1 border border-slate-900 shadow-md rounded");
    tickerInput.setAttribute("type", "text");

    const longOrShortHeading = document.createElement("h3");
    longOrShortHeading.setAttribute("id", "long-short-heading");
    longOrShortHeading.setAttribute("class", "text-xl font-semibold");
    longOrShortHeading.textContent = "Long or Short?"

    const longOrShortSelect = document.createElement("select");
    longOrShortSelect.setAttribute("id", "long-short-select");
    longOrShortSelect.setAttribute("class", "bg-slate-100 w-32 text-left text-lg px-2 py-1 border border-slate-900 shadow-md rounded");

    const selectLong = document.createElement("option");
    selectLong.textContent = "Long";
    selectLong.setAttribute("value", "long");

    const selectShort = document.createElement("option");
    selectShort.textContent = "Short";
    selectShort.setAttribute("value", "short");

    const callOrPutHeading = document.createElement("h3");
    callOrPutHeading.setAttribute("id", "call-put-heading");
    callOrPutHeading.setAttribute("class", "text-xl font-semibold");
    callOrPutHeading.textContent = "Call or Put?";

    const callOrPutSelect = document.createElement("select");
    callOrPutSelect.setAttribute("id", "call-put-select");
    callOrPutSelect.setAttribute("class", "bg-slate-100 w-32 text-left text-lg px-2 py-1 border border-slate-900 shadow-md rounded");

    const selectCall = document.createElement("option");
    selectCall.textContent = "Call"
    selectCall.setAttribute("value", "call");

    const selectPut = document.createElement("option");
    selectPut.textContent = "Put";
    selectPut.setAttribute("value", "put");

    const underlyingPriceLabel = document.createElement("label");
    underlyingPriceLabel.setAttribute("id", "underlying-price-label");
    underlyingPriceLabel.setAttribute("for", "underlying-price-input");
    underlyingPriceLabel.setAttribute("class", "text-xl font-semibold");
    underlyingPriceLabel.textContent = "Underlying Price";

    const underlyingPriceInput = document.createElement("input");
    underlyingPriceInput.setAttribute("id", "underlying-price-input");
    underlyingPriceInput.setAttribute("class", "bg-slate-100 w-32 text-center text-lg px-2 py-1 border border-slate-900 shadow-md rounded");
    underlyingPriceInput.setAttribute("type", "number");
    underlyingPriceInput.setAttribute("step", "0.01");
    underlyingPriceInput.setAttribute("min", "0");

    const strikePriceLabel = document.createElement("label");
    strikePriceLabel.setAttribute("id", "strike-price-label");
    strikePriceLabel.setAttribute("for", "strike-price-input");
    strikePriceLabel.setAttribute("class", "text-xl font-semibold");
    strikePriceLabel.textContent = "Strike Price";

    const strikePriceInput = document.createElement("input");
    strikePriceInput.setAttribute("id", "strike-price-input");
    strikePriceInput.setAttribute("class", "bg-slate-100 w-32 text-center text-lg px-2 py-1 border border-slate-900 shadow-md rounded");
    strikePriceInput.setAttribute("type", "number");
    strikePriceInput.setAttribute("step", "0.01");
    strikePriceInput.setAttribute("min", "0");

    const premiumPriceLabel = document.createElement("label");
    premiumPriceLabel.setAttribute("id", "premium-price-label");
    premiumPriceLabel.setAttribute("for", "premium-price-input");
    premiumPriceLabel.setAttribute("class", "text-xl font-semibold");
    premiumPriceLabel.textContent = "Premium Price";

    const premiumPriceInput = document.createElement("input");
    premiumPriceInput.setAttribute("id", "premium-price-input");
    premiumPriceInput.setAttribute("class", "bg-slate-100 w-32 text-center text-lg px-2 py-1 border border-slate-900 shadow-md rounded");
    premiumPriceInput.setAttribute("type", "number");
    premiumPriceInput.setAttribute("step", "0.01");
    premiumPriceInput.setAttribute("min", "0");

    const breakevenCalculateButton = document.createElement("button");
    breakevenCalculateButton.setAttribute("id", "be-calc-button");
    breakevenCalculateButton.setAttribute("class", "absolute -bottom-1/4 bg-slate-200 text-slate-950 text-lg w-32 h-12 border-2 border-slate-900 rounded-lg shadow-md hover:bg-slate-800 hover:text-slate-200 hover:border-slate-200 hover:font-semibold hover:shadow-2x1 active:translate-y-1 active:shadow-none");
    breakevenCalculateButton.textContent = "Calculate";

    // output
    const sectionTwo = document.createElement("section");
    sectionTwo.setAttribute("id", "section-two");
    sectionTwo.setAttribute("class", "bg-slate-300 border border-slate-900 rounded-lg shadow-lg");

    // section two container
    const sectionTwoContainer = document.createElement("div");
    sectionTwoContainer.setAttribute("class", "section-two-container");

    // DOM rendering
    document.getElementById("main").append(breakevenContainer);

    breakevenContainer.append(sectionOne);
    sectionOne.append(sectionOneContainer);
    sectionOneContainer.append(tickerLabel);
    sectionOneContainer.append(tickerInput);
    sectionOneContainer.append(longOrShortHeading);
    sectionOneContainer.append(longOrShortSelect);
    longOrShortSelect.append(selectLong);
    longOrShortSelect.append(selectShort);
    sectionOneContainer.append(callOrPutHeading);
    sectionOneContainer.append(callOrPutSelect);
    callOrPutSelect.append(selectCall);
    callOrPutSelect.append(selectPut);
    sectionOneContainer.append(underlyingPriceLabel);
    sectionOneContainer.append(underlyingPriceInput);
    sectionOneContainer.append(strikePriceLabel);
    sectionOneContainer.append(strikePriceInput);
    sectionOneContainer.append(premiumPriceLabel);
    sectionOneContainer.append(premiumPriceInput);
    sectionOneContainer.append(breakevenCalculateButton);

    breakevenCalculateButton.addEventListener('click', () => {
        breakevenContainer.append(sectionTwo);
        sectionTwo.append(sectionTwoContainer);

        sectionTwoContainer.querySelectorAll('*').forEach(n => n.remove());

        const outputResult = document.createElement("p");
        outputResult.setAttribute("id", "output-result");
        outputResult.setAttribute("class", "text-center text-slate-950 text-4xl font-semibold p-6");

        const outputPercent = document.createElement("p");
        outputPercent.setAttribute("class", "text-center text-slate-950 text-4xl font-semibold p-6");
        outputPercent.setAttribute("id", "output-percent");

        let breakeven = 0;
        let percentMove = 0;

        if (longOrShortSelect.value === "long") {
            if (callOrPutSelect.value === "call") {
                breakeven = parseFloat(strikePriceInput.value) + parseFloat(premiumPriceInput.value);
                outputResult.textContent = `${tickerInput.value} needs to trade at or above ${breakeven.toFixed(2)} by expiration for you to breakeven.`;
            } else if (callOrPutSelect.value === "put") {
                breakeven = parseFloat(strikePriceInput.value) - parseFloat(premiumPriceInput.value);
                outputResult.textContent = `${tickerInput.value} needs to trade at or below ${breakeven.toFixed(2)} by expiration for you to breakeven.`;
            };
        } else if (longOrShortSelect.value === "short") {
            if (callOrPutSelect.value === "call") {
                breakeven = parseFloat(strikePriceInput.value) + parseFloat(premiumPriceInput.value);
                outputResult.textContent = `If ${tickerInput.value} is trading above ${breakeven.toFixed(2)} at expiration you will lose profit potential.`;
            } else if (callOrPutSelect.value === "put") {
                breakeven = parseFloat(strikePriceInput.value) - parseFloat(premiumPriceInput.value);
                outputResult.textContent = `If ${tickerInput.value} is trading below ${breakeven.toFixed(2)} at expiration you will be underwater.`;
            };
        };
        percentMove = (breakeven - (parseFloat(underlyingPriceInput.value))) / underlyingPriceInput.value;
        outputPercent.textContent = `That's at least a ${percentMove.toFixed(4) * 100}% move!`;

        sectionTwoContainer.append(outputResult);
        sectionTwoContainer.append(outputPercent);
    });
};