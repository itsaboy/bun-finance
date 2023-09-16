const renderBreakeven = () => {
    // main container
    const breakevenContainer = document.createElement('div');
    breakevenContainer.setAttribute("class", "breakeven-container");

    // input
    const sectionOne = document.createElement("section");
    sectionOne.setAttribute("id", "section-one");
    sectionOne.setAttribute("class", "bg-slate-300 border border-slate-900 rounded-lg shadow-lg");

    // section one container
    const sectionOneContainer = document.createElement("div");
    sectionOneContainer.setAttribute("class", "section-one-container");

    // section one items
    const tickerLabel = document.createElement("label");
    tickerLabel.setAttribute("id", "ticker-label");
    tickerLabel.setAttribute("for", "ticker-input");
    tickerLabel.setAttribute("class", "text-xl font-semibold");
    tickerLabel.innerText = "Ticker Symbol";

    const tickerInput = document.createElement("input");
    tickerInput.setAttribute("id", "ticker-input");
    tickerInput.setAttribute("class", "bg-slate-100 w-32 text-center text-lg px-2 py-1");
    tickerInput.setAttribute("type", "text");

    const longOrShortHeading = document.createElement("h3");
    longOrShortHeading.setAttribute("id", "long-short-heading");
    longOrShortHeading.setAttribute("class", "text-xl font-semibold");
    longOrShortHeading.innerText = "Long or Short?"

    const longOrShortSelect = document.createElement("select");
    longOrShortSelect.setAttribute("id", "long-short-select");
    longOrShortSelect.setAttribute("class", "bg-slate-100 w-32 text-left text-lg px-2 py-1");

    const selectLong = document.createElement("option");
    selectLong.innerText = "Long";
    selectLong.setAttribute("value", "long");

    const selectShort = document.createElement("option");
    selectShort.innerText = "Short";
    selectShort.setAttribute("value", "short");

    const callOrPutHeading = document.createElement("h3");
    callOrPutHeading.setAttribute("id", "call-put-heading");
    callOrPutHeading.setAttribute("class", "text-xl font-semibold");
    callOrPutHeading.innerText = "Call or Put?";

    const callOrPutSelect = document.createElement("select");
    callOrPutSelect.setAttribute("id", "call-put-select");
    callOrPutSelect.setAttribute("class", "bg-slate-100 w-32 text-left text-lg px-2 py-1");

    const selectCall = document.createElement("option");
    selectCall.innerText = "Call"
    selectCall.setAttribute("value", "call");

    const selectPut = document.createElement("option");
    selectPut.innerText = "Put";
    selectPut.setAttribute("value", "put");

    const underlyingPriceLabel = document.createElement("label");
    underlyingPriceLabel.setAttribute("id", "underlying-price-label");
    underlyingPriceLabel.setAttribute("for", "underlying-price-input");
    underlyingPriceLabel.setAttribute("class", "text-xl font-semibold");
    underlyingPriceLabel.innerText = "Underlying Price";

    const underlyingPriceInput = document.createElement("input");
    underlyingPriceInput.setAttribute("id", "underlying-price-input");
    underlyingPriceInput.setAttribute("class", "bg-slate-100 w-32 text-center text-lg px-2 py-1");
    underlyingPriceInput.setAttribute("type", "number");

    const strikePriceLabel = document.createElement("label");
    strikePriceLabel.setAttribute("id", "strike-price-label");
    strikePriceLabel.setAttribute("for", "strike-price-input");
    strikePriceLabel.setAttribute("class", "text-xl font-semibold");
    strikePriceLabel.innerText = "Strike Price";

    const strikePriceInput = document.createElement("input");
    strikePriceInput.setAttribute("id", "strike-price-input");
    strikePriceInput.setAttribute("class", "bg-slate-100 w-32 text-center text-lg px-2 py-1");
    strikePriceInput.setAttribute("type", "number");

    const breakevenCalculateButton = document.createElement("button");
    breakevenCalculateButton.setAttribute("id", "be-calc-button");
    breakevenCalculateButton.setAttribute("class", "bg-slate-200 text-slate-950 text-lg w-32 h-12 border border-slate-900 rounded-md shadow-md hover:bg-slate-800 hover:text-slate-200 hover:border-slate-200 hover:font-semibold hover:shadow-2x1 active:translate-y-1 active:shadow-none");
    breakevenCalculateButton.innerText = "Calculate";

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
    sectionOneContainer.append(breakevenCalculateButton)

    breakevenContainer.append(sectionTwo);
    sectionTwo.append(sectionTwoContainer);
};