// Template for breed selection and parent information
function createBreedSelectionTemplate() {
  const lonkkaVaihtoehdot = `
      <option value="">-</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="E">E</option>
  `;

  return `
      <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">Valitse rotu:</label>
          <select id="breed-select" class="w-full p-2 border rounded-md mb-4">
              <option value="">Valitse rotu</option>
              ${Object.entries(breedWeights).map(([key, rotu]) => 
                  `<option value="${key}">${rotu.nimi}</option>`
              ).join('')}
          </select>

          <div class="mt-4">
              <h3 class="text-sm font-medium text-gray-700 mb-2">Vanhempien lonkkatulokset:</h3>
              <div class="grid grid-cols-2 gap-4">
                  <div>
                      <label class="block text-sm text-gray-600 mb-1">Isän lonkat:</label>
                      <div class="flex gap-2">
                          <div>
                              <label class="block text-xs text-gray-500 mb-1">Vasen</label>
                              <select id="father-hips-left" class="w-full p-2 border rounded-md">
                                  ${lonkkaVaihtoehdot}
                              </select>
                          </div>
                          <div>
                              <label class="block text-xs text-gray-500 mb-1">Oikea</label>
                              <select id="father-hips-right" class="w-full p-2 border rounded-md">
                                  ${lonkkaVaihtoehdot}
                              </select>
                          </div>
                      </div>
                  </div>
                  <div>
                      <label class="block text-sm text-gray-600 mb-1">Emän lonkat:</label>
                      <div class="flex gap-2">
                          <div>
                              <label class="block text-xs text-gray-500 mb-1">Vasen</label>
                              <select id="mother-hips-left" class="w-full p-2 border rounded-md">
                                  ${lonkkaVaihtoehdot}
                              </select>
                          </div>
                          <div>
                              <label class="block text-xs text-gray-500 mb-1">Oikea</label>
                              <select id="mother-hips-right" class="w-full p-2 border rounded-md">
                                  ${lonkkaVaihtoehdot}
                              </select>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `;
}

// Template for results layout
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

// Template for checkbox
function createCheckboxTemplate(type) {
  return `
      <label class="flex items-center space-x-2">
          <input type="checkbox" id="${type.id}-check" class="w-4 h-4" checked>
          <span>${type.name}</span>
      </label>
  `;
}