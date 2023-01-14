export default function Navbar() {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
  <a class="navbar-brand" href="#">STUDI INDEPENDEN</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/">Home<span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/si">SI</a>
      <a class="nav-item nav-link" href="/wgs">WGS</a>
      <a class="nav-item nav-link" href="/kegiatan">Kegiatan</a>
    </div>
  </div>
</nav>    )
}