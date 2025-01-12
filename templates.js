// Template for checkbox
function createCheckboxTemplate(type) {
  return `
      <label class="flex items-center space-x-2">
          <input type="checkbox" id="${type.id}-check" class="w-4 h-4" checked>
          <span>${type.name}</span>
      </label>
  `;
}

// Main layout template
function createResultsTemplate() {
  return `
      <div class="mb-8">
          <h3 class="text-xl font-bold mb-4">Tutkimustulokset:</h3>
          <div id="results-values" class="space-y-2"></div>
      </div>
      
      <div>
          <h3 class="text-xl font-bold mb-4">Eläinlääkärin lausunto:</h3>
          <div id="results-interpretations" class="space-y-4"></div>
      </div>
  `;
}

// Template for bilateral results value
function createBilateralResultValueTemplate(type) {
  return `
      <div id="${type.id}-row" class="font-medium">
          <strong>${type.name}: </strong><span id="${type.id}-tulos"></span>
      </div>
  `;
}

// Template for single result value
function createSingleResultValueTemplate(type) {
  return `
      <div id="${type.id}-row" class="font-medium">
          <strong>${type.name}: </strong><span id="${type.id}"></span>
      </div>
  `;
}

// Template for bilateral result interpretation
function createBilateralInterpretationTemplate(type) {
  return `
      <div id="${type.id}-tulkinta-row" class="space-y-2">
          <h4 class="font-medium">${type.name}:</h4>
          <div class="pl-4">
              <div class="mb-2">
                  <div class="font-medium">Vasen:</div>
                  <div class="text-gray-600 pl-4" id="${type.id}-vasen-tulkinta"></div>
              </div>
              <div>
                  <div class="font-medium">Oikea:</div>
                  <div class="text-gray-600 pl-4" id="${type.id}-oikea-tulkinta"></div>
              </div>
          </div>
      </div>
  `;
}

// Template for single result interpretation
function createSingleInterpretationTemplate(type) {
  return `
      <div id="${type.id}-tulkinta-row" class="space-y-2">
          <h4 class="font-medium">${type.name}:</h4>
          <div class="text-gray-600 pl-4" id="${type.id}-tulkinta"></div>
      </div>
  `;
}