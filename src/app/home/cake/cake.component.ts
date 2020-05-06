import {Component, OnInit} from '@angular/core';

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
			path: 'assets/images/pastry1.jpg',
		},
	];
	recipeData = [
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
			id: 'pineappleCake',
			recipeName: 'Pineapple Cake',
			recipePhoto: 'assets/images/pineapple-cake.jpeg',
			ingredients:
				'2 tbsp (45 gram) butter ¼ cup (25 gm) brown sugar 4 slices pineapple 9 cherry **FOR CAKE BATTER** ½ cup (125 ml) oil 1 cup (210 gm) sugar  1 cup (255 ml) milk 1 tsp vinegar 1 tsp pineapple essence 2 cup (300 gm) maida / plain flour 1 tsp baking powder ¼ tsp baking soda pinch salt',
			recipe:
				'**CARAMEL TOPPING PREPARATION** firstly, in a pan take 2 tbsp butter and ¼ cup brown sugar. cook on low flame until the sugar dissolves. transfer the butter sugar mixture to butter paper lined cake pan. i have used cake pan of dia: 7 inch, height: 4 inch. place 4 slices of pineapple over the sugar mixture. also place 9 cherry in centre of pineapples. keep aside. **PINEAPPLE CAKE BATTER**  firstly, in a large bowl take ½ cup oil, 1 cup sugar, 1 cup milk, 1 tsp vinegar and 1 tsp pineapple essence. whisk and mix well making sure the sugar is dissolved completely. now place a sieve and add 2 cup maida, 1 tsp baking powder, ¼ tsp baking soda and pinch salt. sieve the flour to prevent from any lumps. mix well using cut and fold method. mix to a thick cake batter consistency without any lumps. transfer the cake batter to the prepared cake tin. pat gently to remove any air incorporated. now bake in a preheated oven at 180 degree celcius for 45 minutes.  bake until the toothpick inserted comes out clean.  cool completely and slowly unmould the cake peeling off the butter paper. finally, enjoy pineapple upside down cake cutting into slices. ',
		},
	];
	currentPic;
	prevPic;
	nextPic;
	constructor() {}

	ngOnInit() {
		this.prevPic = this.data[0];
		this.currentPic = this.data[1];
		this.nextPic = this.data[2];
	}
	prevClick() {}
	nextClick() {}
}
