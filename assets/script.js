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
