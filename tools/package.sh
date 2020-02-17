# Generate package

echo '📦  Packaging the Schematics...\n'

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
)

for file in "${files_to_copy[@]}"; do
  cp $file dist
  echo 🔹  $file copied  ✅
done

npm i -g replace-in-file
replace-in-file {{LIBRARY_NAME}} "Nest Library Starter" dist/*
replace-in-file {{LIBRARY_NPM}}  nestjs-lib-starter dist/*
replace-in-file {{AUTHOR_NAME}}  super-cat  dist/*
replace-in-file {{AUTHOR_EMAIL}} supercat@mail.com dist/*
