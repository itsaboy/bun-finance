const renderForm4 = () => {
    main.querySelectorAll('*').forEach(n => n.remove());

    // input
    const sectionOneForm4 = document.createElement("section");
    sectionOneForm4.setAttribute("id", "section-one-form4");
    sectionOneForm4.setAttribute("class", "bg-slate-300 border border-slate-900 rounded-lg shadow-lg");

    // section one container
    const sectionOneForm4Container = document.createElement("div");
    sectionOneForm4Container.setAttribute("class", "section-one-container-form4 relative");

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

    const numberOfForm4ResultsLabel = document.createElement("label");
    numberOfForm4ResultsLabel.setAttribute("id", "num-of-label");
    numberOfForm4ResultsLabel.setAttribute("class", "text-xl font-semibold");
    numberOfForm4ResultsLabel.setAttribute("for", "num-of-select");
    numberOfForm4ResultsLabel.textContent = "Number of Results";

    const numberOfForm4ResultsSelect = document.createElement("select");
    numberOfForm4ResultsSelect.setAttribute("id", "num-of-select");
    numberOfForm4ResultsSelect.setAttribute("class", "bg-slate-100 w-16 text-left text-lg px-2 py-1 border border-slate-900 shadow-md rounded");

    const form4Button = document.createElement("button");
    form4Button.setAttribute("id", "form4-button");
    form4Button.setAttribute("class", "absolute -bottom-6 bg-slate-200 text-slate-950 text-lg w-32 h-12 border-2 border-slate-900 rounded-lg shadow-md hover:bg-slate-800 hover:text-slate-200 hover:border-slate-200 hover:font-semibold hover:shadow-2x1 active:translate-y-1 active:shadow-none");
    form4Button.textContent = "Get Form 4";

    // DOM rendering
    document.getElementById("main").append(form4Container);

    form4Container.append(sectionOneForm4);
    sectionOneForm4.append(sectionOneForm4Container);
    sectionOneForm4Container.append(tickerLabel);
    sectionOneForm4Container.append(tickerInput);
    sectionOneForm4Container.append(numberOfForm4ResultsLabel);
    sectionOneForm4Container.append(numberOfForm4ResultsSelect);
    for (let i = 1; i <= 20; i++) {
        const numberOfForm4ResultsOption = document.createElement("option");
        numberOfForm4ResultsOption.setAttribute("value", i);
        numberOfForm4ResultsOption.textContent = i;
        numberOfForm4ResultsSelect.append(numberOfForm4ResultsOption);
    };
    sectionOneForm4Container.append(form4Button);
};