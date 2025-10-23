function unlockTemple() {
  const key = document.getElementById("subscriber-key").value;
  fetch("https://your-oracle-server.com/api/signal-feed", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: key, tier: "oracle", emotion_tag: "activated" })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("signal-feed").innerHTML = data.oracle_feed.join("<br>");
  });
}
function submitTalent(e) {
  e.preventDefault();
  const form = e.target;
  const payload = {
    name: form.name.value,
    tagline: form.tagline.value,
    image_url: form.image_url.value,
    tier: form.tier.value,
    emotion_tag: "activated"
  };
  fetch("https://your-oracle-server.com/api/intake-talent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(res => res.json()).then(data => {
    alert("Talent submitted: " + data.talent_id);
  });
}
