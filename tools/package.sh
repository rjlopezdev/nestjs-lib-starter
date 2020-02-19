#!/bin/bash

# Generate package

echo '📦  Packaging the Schematics...'

# Copy <Collection> Schema
cp schematics/collection.json dist/schematics/collection.json
echo '🔹  <Collection> copied  ✅'

# Copy Schematic <Schemas>
for file in schematics/*/schema.json; do
  cp ${file} dist/${file}
done
echo '🔹  <Schemas> copied  ✅'

# Copy Schematic <Templates>
for dir in schematics/*/; do
  cp -r ${dir}files dist/${dir}
done
echo '🔹  <Template> files copied  ✅'

# Files to copy to dist folder
files_to_copy=(
  package.json
  README.md
  LICENSE
  CONTRIBUTING.md
  CHANGELOG.md
)

for file in "${files_to_copy[@]}"; do
  cp $file dist
  echo 🔹  $file copied  ✅
done
