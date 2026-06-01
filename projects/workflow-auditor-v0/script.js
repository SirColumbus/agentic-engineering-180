const workflowInput = document.getElementById("workflowInput");
const auditButton = document.getElementById("auditButton");
const result = document.getElementById("result");

function auditWorkflow() {
  const workflowText = workflowInput.value.trim();

  if (workflowText.length === 0) {
    result.innerHTML = "<strong>Please describe a workflow first.</strong>";
    return;
  }

  let score = 1;
  let opportunity = "Low";

  if (workflowText.length > 80) {
    score = score + 1;
  }

  if (workflowText.includes("manual") || workflowText.includes("copy") || workflowText.includes("paste")) {
    score = score + 1;
  }

  if (workflowText.includes("email") || workflowText.includes("client") || workflowText.includes("follow-up")) {
    score = score + 1;
  }

  if (score >= 4) {
    opportunity = "High";
  } else if (score >= 3) {
    opportunity = "Medium";
  }

  result.innerHTML = `
    <h2>Audit Result</h2>
    <p><strong>Agentic opportunity:</strong> ${opportunity}</p>
    <p><strong>Score:</strong> ${score}/4</p>
    <p>This workflow may be a good candidate for automation if it is repetitive, text-heavy, and requires decision-making or follow-up.</p>
  `;
}

auditButton.addEventListener("click", auditWorkflow);