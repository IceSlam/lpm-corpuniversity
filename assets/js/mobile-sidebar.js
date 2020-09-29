function sidebarToggle() {
  document.getElementById("sidebar-wrapper").classList.toggle("show");
  document.getElementById("profile-toggle").classList.toggle("toggled")
}

function closeSidebar() {
  document.getElementById("sidebar-wrapper").classList.remove("show");
  document.getElementById("profile-toggle").classList.toggle("toggled")
}

function journalSidebar() {
  document.getElementById('is-journal-sidebar').classList.toggle("show");
}
