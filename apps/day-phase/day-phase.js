// Day Phase App for Bangle.js 2
// Shows time, date, and a progress bar indicating the current phase of the day

// Add Anton font support
Graphics.prototype.setFontAnton = function(scale) {
  // Actual height 69 (68 - 0)
  g.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAA/gAAAAAAAAAAP/gAAAAAAAAAH//gAAAAAAAAB///gAAAAAAAAf///gAAAAAAAP////gAAAAAAD/////gAAAAAA//////gAAAAAP//////gAAAAH///////gAAAB////////gAAAf////////gAAP/////////gAD//////////AA//////////gAA/////////4AAA////////+AAAA////////gAAAA///////wAAAAA//////8AAAAAA//////AAAAAAA/////gAAAAAAA////4AAAAAAAA///+AAAAAAAAA///gAAAAAAAAA//wAAAAAAAAAA/8AAAAAAAAAAA/AAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////AAAAAB///////8AAAAH////////AAAAf////////wAAA/////////4AAB/////////8AAD/////////+AAH//////////AAP//////////gAP//////////gAP//////////gAf//////////wAf//////////wAf//////////wAf//////////wA//8AAAAAB//4A//wAAAAAAf/4A//gAAAAAAP/4A//gAAAAAAP/4A//gAAAAAAP/4A//wAAAAAAf/4A///////////4Af//////////wAf//////////wAf//////////wAf//////////wAP//////////gAP//////////gAH//////////AAH//////////AAD/////////+AAB/////////8AAA/////////4AAAP////////gAAAD///////+AAAAAf//////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/gAAAAAAAAAAP/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/AAAAAAAAAAA//AAAAAAAAAAA/+AAAAAAAAAAB/8AAAAAAAAAAD//////////gAH//////////gAP//////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/4AAAAB/gAAD//4AAAAf/gAAP//4AAAB//gAA///4AAAH//gAB///4AAAf//gAD///4AAA///gAH///4AAD///gAP///4AAH///gAP///4AAP///gAf///4AAf///gAf///4AB////gAf///4AD////gA////4AH////gA////4Af////gA////4A/////gA//wAAB/////gA//gAAH/////gA//gAAP/////gA//gAA///8//gA//gAD///w//gA//wA////g//gA////////A//gA///////8A//gA///////4A//gAf//////wA//gAf//////gA//gAf/////+AA//gAP/////8AA//gAP/////4AA//gAH/////gAA//gAD/////AAA//gAB////8AAA//gAA////wAAA//gAAP///AAAA//gAAD//8AAAA//gAAAP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/+AAAAAD/wAAB//8AAAAP/wAAB///AAAA//wAAB///wAAB//wAAB///4AAD//wAAB///8AAH//wAAB///+AAP//wAAB///+AAP//wAAB////AAf//wAAB////AAf//wAAB////gAf//wAAB////gA///wAAB////gA///wAAB////gA///w//AAf//wA//4A//AAA//wA//gA//AAAf/wA//gB//gAAf/wA//gB//gAAf/wA//gD//wAA//wA//wH//8AB//wA///////////gA///////////gA///////////gA///////////gAf//////////AAf//////////AAP//////////AAP/////////+AAH/////////8AAH///+/////4AAD///+f////wAAA///8P////gAAAf//4H///+AAAAH//gB///wAAAAAP4AAH/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/wAAAAAAAAAA//wAAAAAAAAAP//wAAAAAAAAB///wAAAAAAAAf///wAAAAAAAH////wAAAAAAA/////wAAAAAAP/////wAAAAAB//////wAAAAAf//////wAAAAH///////wAAAA////////wAAAP////////wAAA///////H/wAAA//////wH/wAAA/////8AH/wAAA/////AAH/wAAA////gAAH/wAAA///4AAAH/wAAA//+AAAAH/wAAA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gAAAAAAAAH/4AAAAAAAAAAH/wAAAAAAAAAAH/wAAAAAAAAAAH/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//8AAA/////+B///AAA/////+B///wAA/////+B///4AA/////+B///8AA/////+B///8AA/////+B///+AA/////+B////AA/////+B////AA/////+B////AA/////+B////gA/////+B////gA/////+B////gA/////+A////gA//gP/gAAB//wA//gf/AAAA//wA//gf/AAAAf/wA//g//AAAAf/wA//g//AAAA//wA//g//gAAA//wA//g//+AAP//wA//g////////gA//g////////gA//g////////gA//g////////gA//g////////AA//gf///////AA//gf//////+AA//gP//////+AA//gH//////8AA//gD//////4AA//gB//////wAA//gA//////AAAAAAAH////8AAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////gAAAAB///////+AAAAH////////gAAAf////////4AAB/////////8AAD/////////+AAH//////////AAH//////////gAP//////////gAP//////////gAf//////////wAf//////////wAf//////////wAf//////////wAf//////////4A//wAD/4AAf/4A//gAH/wAAP/4A//gAH/wAAP/4A//gAP/wAAP/4A//gAP/4AAf/4A//wAP/+AD//4A///wP//////4Af//4P//////wAf//4P//////wAf//4P//////wAf//4P//////wAP//4P//////gAP//4H//////gAH//4H//////AAH//4D/////+AAD//4D/////8AAB//4B/////4AAA//4A/////wAAAP/4AP////AAAAB/4AD///4AAAAAAAAAH/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AAAAAAAAAAA//gAAAAAAAAAA//gAAAAAAAAAA//gAAAAAAADgA//gAAAAAAP/gA//gAAAAAH//gA//gAAAAB///gA//gAAAAP///gA//gAAAD////gA//gAAAf////gA//gAAB/////gA//gAAP/////gA//gAB//////gA//gAH//////gA//gA///////gA//gD///////gA//gf///////gA//h////////gA//n////////gA//////////gAA/////////AAAA////////wAAAA///////4AAAAA///////AAAAAA//////4AAAAAA//////AAAAAAA/////4AAAAAAA/////AAAAAAAA////8AAAAAAAA////gAAAAAAAA///+AAAAAAAAA///4AAAAAAAAA///AAAAAAAAAA//4AAAAAAAAAA/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//gB///wAAAAP//4H///+AAAA///8P////gAAB///+f////4AAD///+/////8AAH/////////+AAH//////////AAP//////////gAP//////////gAf//////////gAf//////////wAf//////////wAf//////////wA///////////wA//4D//wAB//4A//wB//gAA//4A//gA//gAAf/4A//gA//AAAf/4A//gA//gAAf/4A//wB//gAA//4A///P//8AH//4Af//////////wAf//////////wAf//////////wAf//////////wAf//////////gAP//////////gAP//////////AAH//////////AAD/////////+AAD///+/////8AAB///8f////wAAAf//4P////AAAAH//wD///8AAAAA/+AAf//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//gAAAAAAAAB///+AA/+AAAAP////gA//wAAAf////wA//4AAB/////4A//8AAD/////8A//+AAD/////+A///AAH/////+A///AAP//////A///gAP//////A///gAf//////A///wAf//////A///wAf//////A///wAf//////A///wA///////AB//4A//4AD//AAP/4A//gAB//AAP/4A//gAA//AAP/4A//gAA/+AAP/4A//gAB/8AAP/4A//wAB/8AAf/4Af//////////wAf//////////wAf//////////wAf//////////wAf//////////wAP//////////gAP//////////gAH//////////AAH/////////+AAD/////////8AAB/////////4AAAf////////wAAAP////////AAAAB///////4AAAAAD/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/AAB/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="), 46, atob("EiAnGicnJycnJycnEw=="), 78 + (scale << 8) + (1 << 16));
};

// Store the last known phase to detect transitions
let lastPhaseIndex = -1; // Initialize to -1 to ensure first phase triggers vibration

// Define the day phases with their start times and colors
const dayPhases = [
  { name: "Sleep", startHour: 0, startMin: 0, color: "#006400" },       // Dark green
  { name: "Morning Routine", startHour: 7, startMin: 0, color: "#90EE90" }, // Light green
  { name: "Focus", startHour: 9, startMin: 0, color: "#ADD8E6" },       // Light blue
  { name: "Pause", startHour: 12, startMin: 0, color: "#FFA500" },      // Orange
  { name: "Focus", startHour: 13, startMin: 0, color: "#ADD8E6" },      // Light blue
  { name: "Pause", startHour: 18, startMin: 0, color: "#FFA500" },      // Orange
  { name: "Focus", startHour: 19, startMin: 0, color: "#ADD8E6" }, 
  { name: "Wind Down", startHour: 20, startMin: 0, color: "#FF7F7F" },  // Light red
  { name: "Bed Time - Sleep", startHour: 21, startMin: 0, color: "#FF0000" }, // Red
  { name: "Sleep", startHour: 22, startMin: 0, color: "#006400" },      // Dark green
];

// Convert a phase's start time to minutes since midnight
function phaseStartInMinutes(phase) {
  return phase.startHour * 60 + phase.startMin;
}

// Find the current phase based on the current time
function getCurrentPhase(date) {
  const currentHour = date.getHours();
  const currentMin = date.getMinutes();
  const currentTimeInMinutes = currentHour * 60 + currentMin;
  
  // Find the current phase
  let currentPhaseIndex = dayPhases.length - 1; // Default to last phase
  for (let i = 0; i < dayPhases.length; i++) {
    const phaseStartTime = phaseStartInMinutes(dayPhases[i]);
    if (currentTimeInMinutes >= phaseStartTime) {
      currentPhaseIndex = i;
    } else {
      break;
    }
  }
  
  // Special handling for midnight transition
  // If we're at or after 22:00 (last Sleep phase) or before 07:00 (first Morning Routine),
  // we're in a Sleep phase
  if (currentTimeInMinutes >= phaseStartInMinutes(dayPhases[dayPhases.length - 1]) || 
      currentTimeInMinutes < phaseStartInMinutes(dayPhases[1])) {
    // If after 22:00, use the last phase index
    // If before 07:00, use index 0
    currentPhaseIndex = (currentTimeInMinutes >= phaseStartInMinutes(dayPhases[dayPhases.length - 1])) 
      ? dayPhases.length - 1 
      : 0;
  }
  
  return currentPhaseIndex;
}

// Calculate the progress within the current phase (0-1)
function getPhaseProgress(date, phaseIndex) {
  const currentHour = date.getHours();
  const currentMin = date.getMinutes();
  const currentTimeInMinutes = currentHour * 60 + currentMin;
  
  const currentPhaseStart = phaseStartInMinutes(dayPhases[phaseIndex]);
  const nextPhaseIndex = (phaseIndex + 1) % dayPhases.length;
  const nextPhaseStart = phaseStartInMinutes(dayPhases[nextPhaseIndex]);
  
  // Handle the case where the next phase is on the next day
  const phaseDuration = nextPhaseStart <= currentPhaseStart ? 
    (nextPhaseStart + 24*60 - currentPhaseStart) : 
    (nextPhaseStart - currentPhaseStart);
  
  const timeIntoPhase = currentTimeInMinutes - currentPhaseStart;
  
  return timeIntoPhase / phaseDuration;
}

// Check for phase transition and vibrate if needed
function handlePhaseTransition(currentPhaseIndex) {
  if (lastPhaseIndex !== currentPhaseIndex) {
    // Phase has changed, trigger vibration
    Bangle.buzz(500); // Vibrate for half of second
    lastPhaseIndex = currentPhaseIndex;
  }
}

// Draw the progress bar
function drawProgressBar(date) {
  const currentPhaseIndex = getCurrentPhase(date);
  handlePhaseTransition(currentPhaseIndex);
  const progress = getPhaseProgress(date, currentPhaseIndex);
  
  const barWidth = 160;  // Increased from 140 to use more screen width
  const barHeight = 16;
  const barY = 146;
  const barX = (176 - barWidth) / 2; // Center horizontally
  
  g.clearRect(0, barY - 20, 176, barY + 50); // Clear the bar area and text
  
  // Draw the background for all phases
  let xPos = barX;
  let totalWidth = 0; // Track total width to handle rounding errors
  
  for (let i = 0; i < dayPhases.length; i++) {
    const nextIndex = (i + 1) % dayPhases.length;
    const phaseStart = phaseStartInMinutes(dayPhases[i]);
    const nextPhaseStart = phaseStartInMinutes(dayPhases[nextIndex]);
    
    // Calculate phase duration in minutes
    const phaseDuration = nextPhaseStart <= phaseStart ? 
      (nextPhaseStart + 24*60 - phaseStart) : 
      (nextPhaseStart - phaseStart);
    
    // Calculate width of this phase segment
    let segmentWidth = Math.floor((phaseDuration / (24*60)) * barWidth);
    
    // Adjust last segment to fill the bar completely
    if (i === dayPhases.length - 1) {
      segmentWidth = barWidth - totalWidth;
    } else {
      totalWidth += segmentWidth;
    }
    
    // Draw phase initial above the bar with more space
    g.setColor(g.theme.fg);
    g.setFontAlign(0, 1);
    g.setFont("6x8", 1);
    // Move the phase initial up a bit more for better spacing
    g.drawString(dayPhases[i].name.substring(0, 1), xPos + segmentWidth/2, barY - 4);
    
    // Rest of your existing drawing code for the segments...
    if (i > currentPhaseIndex || (i === dayPhases.length - 1 && currentPhaseIndex === 0)) {
      g.setColor(dayPhases[i].color);
      g.setColor(g.blendColor(g.getColor(), g.theme.bg, 0.7));
      g.fillRect(xPos, barY, xPos + segmentWidth, barY + barHeight);
    } else if (i < currentPhaseIndex) {
      g.setColor(dayPhases[i].color);
      g.fillRect(xPos, barY, xPos + segmentWidth, barY + barHeight);
    } else if (i === currentPhaseIndex) {
      const progressWidth = Math.floor(segmentWidth * progress);
      g.setColor(dayPhases[i].color);
      g.fillRect(xPos, barY, xPos + progressWidth, barY + barHeight);
      g.setColor(dayPhases[i].color);
      g.setColor(g.blendColor(g.getColor(), g.theme.bg, 0.7));
      g.fillRect(xPos + progressWidth, barY, xPos + segmentWidth, barY + barHeight);
      
      // Draw the arrow pointer
      g.setColor(g.theme.fg);
      const arrowX = xPos + progressWidth;
      g.fillPoly([
        arrowX, barY - 2,
        arrowX - 3, barY - 8,
        arrowX + 3, barY - 8
      ]);
    }
    
    xPos += segmentWidth;
  }
  
  // Draw border around the progress bar
  g.setColor(g.theme.fg);
  g.drawRect(barX, barY, barX + barWidth, barY + barHeight);
  
  // Display current phase name
  g.setFontAlign(0, -1);
  g.setFont("6x8", 1);
  g.drawString(dayPhases[currentPhaseIndex].name, 88, barY + barHeight + 4);
}

// Draw the time and date
function drawTimeAndDate() {
  const date = new Date();
  
  // Clear the screen
  g.clear();
  
  // Draw time with Anton font
  g.setFontAlign(0, 0);
  g.setFontAnton(0.7);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  // Move time down from 60 to 70
  g.drawString(`${hours}:${minutes}`, 88, 76);
  
  // Draw date
  g.setFont("6x8", 2);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  // Move date down from 100 to 110
  g.drawString(`${day}.${month}.${year}`, 88, 116);
  
  // Draw the progress bar
  drawProgressBar(date);
}

// Main function to update the display
function updateDisplay() {
  drawTimeAndDate();
}

// Initialize the app
function init() {
  // Clear the screen and draw initial display
  g.clear();
  
  // Only set up Bangle.js specific features if we're on the device
  if (global.Bangle) {
    Bangle.setUI("clock");
    
    // Update on screen wake
    Bangle.on('lcdPower', (on) => {
      if (on) updateDisplay();
    });
  }
  
  updateDisplay();
  
  // Set up timer to update every minute
  setInterval(updateDisplay, 60000);
}

// Only load and draw widgets if we're on the device
if (global.Bangle) {
  // Load widgets
  Bangle.loadWidgets();
  // Draw widgets
  Bangle.drawWidgets();
}

// Start the app
init(); 