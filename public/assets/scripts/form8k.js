const renderForm8K = () => {
    main.querySelectorAll('*').forEach(n => n.remove());

    // input
    const sectionOneForm8K = document.createElement("section");
    sectionOneForm8K.setAttribute("id", "section-one-form4");
    sectionOneForm8K.setAttribute("class", "bg-slate-300 border border-slate-900 rounded-lg shadow-lg");

    // section one container
    const sectionOneForm8KContainer = document.createElement("div");
    sectionOneForm8KContainer.setAttribute("class", "section-one-container-form8k relative");

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

    const numberOfForm8KResultsLabel = document.createElement("label");
    numberOfForm8KResultsLabel.setAttribute("id", "num-of-label");
    numberOfForm8KResultsLabel.setAttribute("class", "text-xl font-semibold");
    numberOfForm8KResultsLabel.setAttribute("for", "num-of-select");
    numberOfForm8KResultsLabel.textContent = "Number of Results";

    const numberOfForm8KResultsSelect = document.createElement("select");
    numberOfForm8KResultsSelect.setAttribute("id", "num-of-select");
    numberOfForm8KResultsSelect.setAttribute("class", "bg-slate-100 w-16 text-left text-lg px-2 py-1 border border-slate-900 shadow-md rounded");

    const form8KButton = document.createElement("button");
    form8KButton.setAttribute("id", "form8k-button");
    form8KButton.setAttribute("class", "absolute -bottom-6 bg-slate-200 text-slate-950 text-lg w-32 h-12 border-2 border-slate-900 rounded-lg shadow-md hover:bg-slate-800 hover:text-slate-200 hover:border-slate-200 hover:font-semibold hover:shadow-2x1 active:translate-y-1 active:shadow-none");
    form8KButton.textContent = "Get Form 8K";

    // DOM rendering
    document.getElementById("main").append(form8KContainer);

    form8KContainer.append(sectionOneForm8K);
    sectionOneForm8K.append(sectionOneForm8KContainer);
    sectionOneForm8KContainer.append(tickerLabel);
    sectionOneForm8KContainer.append(tickerInput);
    sectionOneForm8KContainer.append(numberOfForm8KResultsLabel);
    sectionOneForm8KContainer.append(numberOfForm8KResultsSelect);
    for (let i = 1; i <= 20; i++) {
        const numberOfForm8KResultsOption = document.createElement("option");
        numberOfForm8KResultsOption.setAttribute("value", i);
        numberOfForm8KResultsOption.textContent = i;
        numberOfForm8KResultsSelect.append(numberOfForm8KResultsOption);
    };
    sectionOneForm8KContainer.append(form8KButton);
};