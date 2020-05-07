import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'app-cake',
	templateUrl: './cake.component.html',
	styleUrls: ['./cake.component.scss'],
})
export class CakeComponent implements OnInit {
	data: any = [
		{
			id: 1,
			path: 'assets/images/donats1.jpg',
		},
		{
			id: 2,
			path: 'assets/images/cake2.jpg',
		},
		{
			id: 3,
			path: 'assets/images/dessert1.jpg',
		},
	];
	recipeData = [
		{
			id: 'oreoCake',
			recipeName: 'Oreo Cake',
			recipePhoto: 'assets/images/oreo-cake2.jpeg',
			ingredients:
				'**FOR OREO CRUST** 36 3 packets oreo biscuits, original vanilla flavour ¾ cup unsalted butter, melted **FOR CREAM CHEESE CAKE**  500 grams 2 blocks cream cheese, softened 1 tin, 14 oz. condensed milk / milkmaid  1 tsp vanilla extract ½ lemon, juice **FOR CHOCOLATE FROSTING**  1 cup thickened cream, 35% or more milk fat  3 tbsp powdered sugar / icing sugar 2 tbsp cocoa powder 1 tsp vanilla extract 4 strawberries, cut half',
			recipe:
				'crush the oreos, add unsalted melted butter and mix well. transfer the prepared oreo crust into springform cake pan. level up and press tight with the help of a cup making sure the base is tight. keep in refrigerator for 15 minutes, allowing to set. meanwhile, in a large mixing bowl take cream cheese, condensed milk / milkmaid. additionally add vanilla extract and lemon juice. with the help of hand blender or a whisk beat continuously. beat till stiff peaks appear.  transfer to cake pan. level it up and refrigerate for 3 hours. after 3 hours, the cake will be well set. loosen the springform cake pan slowly without damaging the cake. decorate the cake with chocolate frosting and chopped strawberry. finally, cut and serve no bake, oreo cream cheesecake or store in refrigerator for a week or more.',
		},
		{
			id: 'blackForestCake',
			recipeName: 'Black Forest Cake',
			recipePhoto: 'assets/images/black-forest-cake.jpeg',
			ingredients:
				'**FOR CHOCOLATE CAKE* ( DOUBLE THE INGREDIENTS TO PREPARE 2 CAKES FOR 4 LAYER BLACK FOREST CAKE) 1 cup powdered sugar / icing sugar ¾ cup unsalted butter, at room temperature 1 tsp vanilla extract / vanilla essence  1¼ - 1½ cup buttermilk or 1½ cup warm milk + 1 tsp vinegar 1½ cups maida / plain flour / all-purpose flour  ¼ cup unsweetened cocoa powder  1 tsp baking powder  ½ tsp baking soda  pinch of salt  **FOR CHERRY SYRUP**  ¼ cup cherry  ½ cup water  1 tbsp sugar  **FOR FROSTING**  2 cups thickened cream, 35% milk fat  ¼ cup powdered sugar / icing sugar  1 tsp vanilla extract / vanilla essence  **FOR CAKE DECORATION**  1 bar dark chocolate, for curls  9 cherry.',
			recipe:
				' Firstly, in a take powdered sugar and butter. beat till the mixture turns smooth and fluffy. further add vanilla extract and buttermilk. combine well.  now sieve maida, cocoa powder, baking powder, baking soda and pinch of salt. then cut and fold gently till the smooth dropping consistency batter formed.  bake the cake at 180 degree celsius for 30 minutes. finally, cool down the cake completely and cut into 2 equal half.  now place 1st layer and top with cherry syrup, frosting and cherries.  repeat for 2, 3 and 4th layer. tart spreading frosting over the sides of cake carefully.  place chocolate curls in the centre and stick on sides.  furthermore, decorate cake and place cherries in the centre. finally, black forest cake is ready to cut and serve.',
		},
		{
			id: 'custardCake',
			recipeName: 'Custard Cake',
			recipePhoto: 'assets/images/custard-cake.jpeg',
			ingredients:
				'½ cup (100 gm) butter, softened 1 cup (230 gm) sugar 1 cup (255 ml) milk, room temperature 1 tsp  vinegar 1 tsp  vanilla extract 1½ cup (240 gm) maida / plain flour ½ cup (68 gm) custard powder ½ tsp baking soda 1 tsp  baking powder',
			recipe:
				'firstly, in a large mixing bowl take ½ cup butter and 1 cup sugar. beat smooth and fluffy till the butter and sugar combine well. now add 1 cup milk, 1 tsp vinegar and 1 tsp vanilla extract. mix well. sieve 1½ cup maida, ½ cup custard powder, ½ tsp baking soda and 1 tsp baking powder. mix well using cut and fold method. transfer the cake batter into the round cake mould and bake at 180 degree celsius for 40 minutes. now spread a generous amount of jam mixture over cake and level out forming a frosting. finally, serve custard cake immediately, or store in a refrigerator for a week.',
		},
		{
			id: 'chocolateCake',
			recipeName: 'Chocolate Cake',
			recipePhoto: 'assets/images/chocolate-cake-recipe-2.jpeg',
			ingredients:
				'1 cup condensed milk / milkmaid ¾ cup unsalted butter, at room temperature 1½ cup maida / plain flour / all purpose flour 3 tbsp unsweetened cocoa powder  ¾ tsp baking soda 1 tsp baking powder ¼ tsp salt 1 tsp vinegar ¾ tsp vanilla extract ¾ cup warm milk, add as required **FOR CHOCOLATE FROSTING** ½ cup unsalted butter, at room temperature ½ cup unsweetened cocoa powder 2 cups powdered sugar / icing sugar 1 tsp vanilla extract ¼ cup cold milk, add as required',
			recipe:
				'**CHOCOLATE CAKE RECIPE** Firstly, in a large mixing bowl take condensed milk and butter. beat in one direction till the mixture turns smooth and fluffy. also sieve, maida, cocoa powder, baking soda, baking powder and salt. then fold gently.  furthermore add vinegar, vanilla extract and warm milk.  mix gently to attain smooth dropping consistency. transfer the cake batter to a cake mould. bake the cake at 180 degree celsius for 25 minutes. cool down the cake completely. **CHOCOLATE FROSTING RECIPE** firstly, in a large mixing bowl take take butter and beat. then add cocoa powder, powdered sugar, vanilla extract add cold milk. beat till the mixture turns smooth and spreadable. **DECORATING CHOCOLATE CAKE RECIPE** spread the generous amount of prepared chocolate frosting. then place another baked cake. again spread the frosting. at last cut the cake to desired shape and serve.',
		},
		{
			id: 'marbleCake',
			recipeName: 'Marble Cake',
			recipePhoto: 'assets/images/marble-cake3.jpeg',
			ingredients:
				'   **For Vanilla Cake Batter** ½ cup (135 grams) curd / yogurt,fresh ½ cup (120 grams) sugar ¼ cup (55 grams) oil 1 tsp vanilla extract 1 cup (170 grams) maida / plain flour pinch baking soda ½ tsp baking powder pinch salt 2 tbsp water **For Chocolate Cake Batter** ½ cup (135 grams) curd / yogurt, fresh ½ cup (120 grams) sugar ¼ cup (55 grams) oil 1 tsp vanilla extract ¾ cup (127 grams) maida / plain flour ¼ cup (20 grams) cocoa powder pinch baking soda ½ tsp baking powder pinch salt 2 tbsp water ',
			recipe:
				'Firstly, scoop 2 tbsp of vanilla cake batter and transfer to a cake tin. on top of vanilla cake batter add 2 tbsp of chocolate cake batter. alternatively, add vanilla and chocolate cake batter. allowing to spread naturally. using a back of the spoon, give a zig-zag swirl to get a nice design without disturbing the layers. pat the tray twice to remove the air incorporated into the batter. place the cake tray into the preheated oven. bake the cake at 180 degree celsius for 50 minutes. further, allow the cake to cool completely and later cut into thick slices and serve. finally, serve the eggless marble cake or store in an airtight container.',
		},
		{
			id: 'breadCake',
			recipeName: 'Bread Cake',
			recipePhoto: 'assets/images/bread-cake2.jpeg',
			ingredients:
				'   2 cup whipping cream, 35% milk fat ¼ cup icing sugar 1 tsp vanilla extract **FOR CHERRY SYRUP** 10 cherry, chopped 1 tbsp sugar  ½ cup water **OTHER INGREDIENTS** 5 slices bread, white or brown ½ cup dark chocolate, grated 10 cherry',
			recipe:
				'firstly, trim off the sides of 5 slices of bread. place a slice of bread over turning table. brush with a tsp of cherry syrup. now spread a tbsp of frosting over it. place another bread slice and repeat cherry syrup and frosting alternatively for 5 slices of bread. over the last bread slice cover with frosting uniformly on sides. stick the dark chocolate shavings over sides of cake. squeeze out piping pagand create design over cake. top with cherry making the cake look beautiful. also, around the sides of cake, decorate with frosting. finally, refrigerate for 30 minutes and enjoy bread cake recipe.',
		},
		{
			id: 'chocolateBananaCake',
			recipeName: 'Chocolate Banana Cake',
			recipePhoto: 'assets/images/chocolate-banana-cake.jpeg',
			ingredients:
				'2 banana, ripened ¾ cup (180 gm) sugar **FOR CAKE BATTER** ½ cup (120 ml) oil 1 tsp vanilla extract 1 tsp vinegar 1½ cup (262 gm) maida / plain flour ½ cup (45 grm) cocoa powder 1 tsp baking powder ¼ tsp baking soda ¼ tsp salt ½ cup (120 ml) water ¼ cup (30 gm) walnut, chopped 3 tbsp chocolate chip',
			recipe:
				'firstly, in a blender take 2 banana and ¾ cup sugar. blend to smooth puree without adding any water. transfer the banana puree into a large bowl. add ½ cup oil, 1 tsp vanilla extract and 1 tsp vinegar. whisk well until everything is well combined. place a sieve and add 1½ cup maida, ½ cup cocoa powder, 1 tsp baking powder, ¼ tsp baking soda and ¼ tsp salt. sieve the flour making sure there are no lumps. mix well using cut and fold method. further, add ½ cup water and mix well. mix to a thick cake batter consistency. also, add ¼ cup walnut and mix gently. transfer the cake batter to a cake tin. make sure to grease the mould and place a butter paper at the bottom to avoid sticking. i have used bread loaf pan from smith+nobel – 21x11cm. top with 3 tbsp chocolate chip over it. place the cake tray into the preheated oven. bake the cake at 180 degree celsius or 356 degrees fahrenheit for 40 minutes. or bake till the toothpick inserted comes out clean. further, allow the cake to cool completely and later cut into thick slices and serve. finally, serve the eggless chocolate banana cake or store in an airtight container.',
		},
		{
			id: 'cupCake',
			recipeName: 'Cup Cake',
			recipePhoto: 'assets/images/cup-cake.jpeg',
			ingredients:
				'¾ cup curd / yogurt, fresh curd ¼ cup oil, unflavoured 1 tsp vanilla extract / vanilla essence 1¼ cup maida / all-purpose flour / plain flour ½ cup powdered sugar 1 tsp baking powder ½ tsp baking soda / sodium bicarbonate pinch of salt ¼ cup water ¼ cup chocolate chip 6 cupcake liners',
			recipe:
				'firstly, in a large mixing bowl take ¾ cup of curd and ¼ cup of oil. further add vanilla extract and whisk well. furthermore whisk 5 minutes till the curd and oil blends smooth. then sieve maida, powdered sugar, baking powder, baking soda and a pinch of salt. whisk and combine. also add ¼ cup of water and make a smooth batter. furthermore, add chocolate chip and fold gently. scoop the cake batter and pour into cupcake liners two-third to ¾ full. and also tap twice to level up uniformly and remove any air bubbles if present. roughly spread few chocolate chips over the cup cake batter. bake the cake at 180 degree celsius or 356 degree fahrenheit for 15 minutes. cool down the cake completely. finally serve vanilla cupcake immediately or serve as required.',
		},
		{
			id: 'swissRollCake',
			recipeName: 'Swiss Roll Cake',
			recipePhoto: 'assets/images/swiss-roll-cake.jpeg',
			ingredients:
				'½ cup (120 ml) milk ¼ cup (60 ml) oil 1 tsp vinegar 1 tsp vanilla extract ¾ cup (120 gm) maida / plain flour ¼ cup (20 gm) cocoa powder ½ cup (55 gm) powdered sugar ½ tsp baking powder ¼ tsp baking soda ¼ tsp salt 2 tbsp milk **FOR FROSTING** 1 cup whipping cream, 35% milkfat 2 tbsp icing sugar 1 tsp vanilla extract **OTHER INGREDIENTS** oil, for greasing pan powdered sugar, for dusting',
			recipe:
				'firstly, in a large bowl take ½ cup milk, ¼ cup oil, 1 tsp vinegar and 1 tsp vanilla extract. whisk well until everything is well combined. now place a sieve and add ¾ cup maida, ¼ cup cocoa powder, ½ cup powdered sugar, ½ tsp baking powder, ¼ tsp baking soda and ¼ tsp salt. sieve well making sure there are no lumps. mix gently using cut and fold method until the batter is well combined. add 2 tbsp milk if required and mix gently. prepare a smooth cake batter. grease the frying pan with oil to prevent from sticking. pour 2 ladle full of cake batter over pan and spread uniformly. place on the gas stove and cover with a lid. simmer and cook on low flame for 8 minutes. or cook until toothpick inserted comes out clean. transfer the cake over butter paper. be careful as the cake may break. dust with powdered sugar to prevent from sticking. roll gently when the cake is warm and rest for 30 minutes. this helps the cake to bend easily and not break. meanwhile, prepare frosting by taking 1 cup chilled whipping cream. also, add 2 tbsp powdered sugar and 1 tsp vanilla extract. beat on low speed until the cream thickens. after 5 minutes, the cream turns stiff peaks. open the rolled cake without breaking. spread a generous amount of prepared whipping cream.  roll gently, and wrap with cling wrap. refrigerate for 30 minutes or until it sets completely.  finally, cut into thick slice and enjoy chocolate swill roll with a cherry.',
		},
		{
			id: 'iceCreamCake',
			recipeName: 'Ice Cream Cake',
			recipePhoto: 'assets/images/ice-cream-cake.jpeg',
			ingredients:
				'2 cups ice cream, vanilla / any flavour (use full cream ice cream. low-fat or dairy-free ice cream do not work) 1½ cups maida / plain flour / refined flour / all-purpose flour 2 tsp baking powder pinch of salt',
			recipe:
				'Firstly, in a large mixing bowl take 2 cups vanilla ice cream. use any flavoured ice cream but low-fat or dairy-free ice cream do not work. allow it to melt naturally. alternatively, defrost to melt faster.  add in 1½ cups maida. also add 2 tsp baking powder, pinch of salt. (avoid baking powder and salt if using self raising flour). mix well to form thick batter. do not worry if the batter is sticky. transfer the ice cream cake batter into bread loaf lined with baking paper. (i have used bread loaf - width: 12 cm, height: 6 cm, length: 26 cm) level it up with a spatula. further bake the cake in preheated oven at 180 degree celsius or 356 degree fahrenheit for 25 to 35 minutes. to bake in microwave or cooker check out the notes section below. to check the cake has baked completely, always insert a toothpick at the centre and see if it comes out clean. else bake for 5 more minutes. cool down the cake completely. also transfer the cake to cooling rack to cool faster.  now slice the cake once cooled completely. finally, enjoy eggless ice cream cake or store in a airtight container for atleast a week. ',
		},
		{
			id: 'biscuitCake',
			recipeName: 'Biscuit Cake',
			recipePhoto: 'assets/images/biscuit-cake.jpeg',
			ingredients:
				'458 grams parle-g 2/3 rd cup thickened cream ½ cup sugar  1 tbsp butter  ½ cup cocoa powder  1 tsp vanilla extract 5 almonds, chopped  5 walnuts, chopped  **FOR CHOCOLATE SAUCE** 150 grams dark chocolate  ½ cup thickened cream  white chocolate for decoration',
			recipe:
				' Firstly, break into small pieces 458 grams parle-g or any digestive biscuits / tea biscuits.  in double boiling method, melt 2/3rd cup thickened cream, ½ cup sugar, 1 tbsp butter and whisk till butter melts completely.  additionally add ½ cup cocoa powder and whisk smooth.  keep whisking till the mixture turns smooth and silky. pour the prepared chocolate mixture over biscuit pieces.  add in 1 tsp vanilla extract, 5 almonds and 5 walnuts.  mix well combining everything. transfer the mixture into 8 inch springform cake pan. level up and press tight with the help of a spoon making sure the base is tight.  keep in refrigerator for 30 minutes, allowing to set. meanwhile prepare the chocolate sauce by melting 150 grams dark chocolate in double boiler method.  dditionally add ½ cup thickened cream and whisk smooth.  keep whisking till the mixture turns smooth and silky.  pour the prepared chocolate sauce into prepared biscuit cake. level out by tapping slightly.  refrigerate for 4 hours or more till the chocolate sauce sets completely.  finally, melt white chocolate and decorate the parle-g biscuit cake before serving.',
		},
	];
	currentPic;
	prevPic;
	nextPic;
	constructor(private _router: Router) {}

	ngOnInit() {
		this.prevPic = this.data[0];
		this.currentPic = this.data[1];
		this.nextPic = this.data[2];
	}
	prevClick() {}
	nextClick() {
		this._router.navigate(['/dessert']);
	}
}
