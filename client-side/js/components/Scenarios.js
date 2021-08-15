export default function Scenarios() {
  return `
    <div id="scenarios-div">
    <body>
    <nav class="national-navbar">
      <a id="app-title" class="navbar-brand" href="#"
        >National Parks Finder App</a
      >
    </nav>

    <main role="main" class="national-container">
      <section class="app-container">
        <form id="search-form">
          <h1>Search U.S. National Parks</h1>
          <p>Enter the state for some national parks suggestions</p>
          <input
            type="text"
            id="state-name-input"
            class="form-control"
            placeholder="Enter a state"
          />
          <br />
          <p>Number of parks you want to review</p>
          <input
            type="text"
            id="number-input"
            class="form-control"
            placeholder="Default 10 park results"
          />
          <br />
          <input
            id="submit-button"
            class="btn btn-primary"
            type="submit"
            value="Submit"
          />
        </form>
      </section>
      <section id="results-list" class="container hidden">
        <p>Here are your park results</p>
      </section>
    </main>
    </div>
    `;
}
