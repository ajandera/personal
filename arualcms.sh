# stop website
docker stop ajandera_server
docker stop ajandera_mongo
# clone arualCMS from github
git clone https://github.com/ajandera/arualcms.git --depth 1 --branch=main ./arualcms-main
# update env
rm ./arualcms-main/admin/.env.production
cp ./site/.env.production ./arualcms-main/admin/.env.production
# build arualCMS vuejs admin
cd ./arualcms-main/admin
npm install
npm run build

# copy build admin to apo public www folder
cd ..
cd ..
rm -rf ./arualcms/api
cp -R ./arualcms-main/api ./arualcms
cp -R ./arualcms-main/admin/dist ./arualcms/api/www/admin
cp ./htaccess_arual ./arualcms/api/www/admin/.htaccess

# composer update for API
cd ./arualcms-main
docker-compose up -d
docker exec -ti arualcms-main_php_1 composer install
# stop arulaCMS containers
docker stop arualcms-main_php_1
docker stop arualcms-main_mongo_1
# copy vendor to production
cd ..
cp -R ./arualcms-main/api/vendor ./arualcms/api/vendor
# remove arualCMS tmp files
rm -rf ./arualcms-main
# start website
docker-compose up -d
