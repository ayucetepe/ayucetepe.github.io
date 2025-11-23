# convert-images.ps1
# PowerShell script to convert JPG/PNG images in ./images to WebP using available tools.
# Requires either ImageMagick (magick) or cwebp installed and available in PATH.

$imagesDir = Join-Path $PSScriptRoot 'images'
if (-not (Test-Path $imagesDir)) {
    Write-Error "images directory not found: $imagesDir"
    exit 1
}

$files = Get-ChildItem -Path $imagesDir -Include *.jpg,*.jpeg,*.png -File
if ($files.Count -eq 0) {
    Write-Output "No JPG/PNG files found in $imagesDir"
    exit 0
}

function Convert-WithMagick($src, $dest) {
    & magick convert $src -quality 80 $dest
}

function Convert-WithCwebp($src, $dest) {
    & cwebp -q 80 $src -o $dest
}

foreach ($f in $files) {
    $src = $f.FullName
    $dest = [System.IO.Path]::ChangeExtension($src, '.webp')
    if (Test-Path $dest) {
        Write-Output "Skipping existing: $dest"
        continue
    }
    Write-Output "Converting: $($f.Name) -> $(Split-Path $dest -Leaf)"
    try {
        if (Get-Command magick -ErrorAction SilentlyContinue) {
            Convert-WithMagick $src $dest
        } elseif (Get-Command cwebp -ErrorAction SilentlyContinue) {
            Convert-WithCwebp $src $dest
        } else {
            Write-Error "Neither 'magick' nor 'cwebp' found in PATH. Please install ImageMagick or libwebp and re-run this script."
            exit 2
        }
    } catch {
        Write-Error "Conversion failed for $src : $_"
    }
}

Write-Output "Done. WebP files created in $imagesDir (if conversion available)."