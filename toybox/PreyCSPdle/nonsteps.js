const csps = [
  // empty
];

const PROCEDURE_B = 1;
const PROCEDURE_O = 2;
const PROCEDURE_D = 3;
const PROCEDURE_X = 4;
const PROCEDURE_N = 6;
const BLANK = 0;
const STEP = 1;
const FREEZE = 2;
const LINES = 9;
const LIMIT_T = 72;
const LIMIT_B = 77 * 8 - LINES - 1;

let result = '';

const decodeSteps = () => {
  const decoded = [];
  csps.forEach((item) => {
    switch(parseInt(item.charAt(0), 10)) {
      case PROCEDURE_B: {
        decoded.push(parseInt(parseInt(item.slice(1), 16).toString(10), PROCEDURE_O));
        return;
      }
      case PROCEDURE_O: {
        decoded.push(parseInt(item.slice(1), PROCEDURE_O * PROCEDURE_X));
        return;
      }
      case PROCEDURE_D: {
        decoded.push(parseInt(item.slice(1), PROCEDURE_X + PROCEDURE_N));
        return;
      }
      case PROCEDURE_X: {
        decoded.push(parseInt(item.slice(1), PROCEDURE_X * PROCEDURE_X));
        return;
      }
      case PROCEDURE_N: {
        const count = parseInt(item.slice(1), PROCEDURE_X + PROCEDURE_N);
        decoded.push(...[...new Array(count)].fill(BLANK));
        return;
      }
    }
  });

  return decoded;
};

const renderBlock = (elm, po, ind) => {
  const red = !(ind % 2)
  switch(Math.floor(elm / po)) {
    default:
    case BLANK: return '⬜';
    case STEP: return !red ? '🟦' : '🟥';
    case FREEZE: return '🟩';
  }
}

const generate = () => {
  const steps = decodeSteps();
  const pos = LIMIT_T + Math.floor(Math.random() * (LIMIT_B - LIMIT_T));
  const patterns = steps.filter((_, index) => {
    return pos <= index && index < pos + LINES;
  }).map((val, index) => {
    const fixedIndex = index + pos;
    return renderBlock(val, 27, fixedIndex) +
      renderBlock(val % 27, 9, fixedIndex) +
      renderBlock(val % 9, 3, fixedIndex) +
      renderBlock(val % 3, 1, fixedIndex);
  }).join('\n');
  
  setPatterns(patterns);
  setCopyVisible();
  
  result = patterns.replace(/⬜/g, '⬛');
}

const copy = () => {
  if (navigator.clipboard){
    navigator.clipboard.writeText('Prey CSP dle' + '\n\n' + result);
  }
}

const setPatterns = (patterns) => {
  const resultPatternElm = document.getElementById("patterns");
  resultPatternElm.innerText = patterns;
  resultPatternElm.removeAttribute("style");
}

const setCopyVisible = () => {
  const resultBarsElm = document.getElementById("copy");
  resultBarsElm.removeAttribute("style");
}