$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$repo = Get-Location

if (-not (Test-Path (Join-Path $repo "package.json"))) {
  throw "Run this script from the root of your parmana-site repository."
}

$files = @(
  "lib\config.ts",
  "app\layout.tsx",
  "app\agents\page.tsx",
  "app\demo\page.tsx",
  "app\book\page.tsx",
  "components\Header.tsx",
  "components\Footer.tsx",
  "components\BottomCTA.tsx",
  "components\ProofPoints.tsx",
  "components\DemoHero.tsx",
  "components\DemoVideoSection.tsx",
  "components\DemoCTA.tsx",
  "components\ParmanaWebsite.tsx",
  "components\home\Section.tsx",
  "components\home\Hero.tsx",
  "components\home\HowItWorks.tsx",
  "components\home\RefundExample.tsx",
  "components\home\Outcomes.tsx",
  "components\home\Developers.tsx",
  "components\home\Trust.tsx",
  "components\home\ClosingCTA.tsx"
)

foreach ($file in $files) {
  $source = Join-Path $root $file
  $target = Join-Path $repo $file
  $parent = Split-Path -Parent $target
  New-Item -ItemType Directory -Force -Path $parent | Out-Null
  Copy-Item -Force $source $target
  Write-Host "Updated $file"
}

Write-Host ""
Write-Host "Website revision applied."
Write-Host "Next:"
Write-Host "  npm run lint"
Write-Host "  npm run build"
Write-Host "  git diff --stat"
Write-Host "  git add ."
Write-Host '  git commit -m "Reposition Parmana for autonomous business systems"'
Write-Host "  git push origin main"
