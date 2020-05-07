import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'app-dessert',
	templateUrl: './dessert.component.html',
	styleUrls: ['./dessert.component.scss'],
})
export class DessertComponent implements OnInit {
	data: any = [
		{
			id: 1,
			path: 'assets/images/cake2.jpg',
		},
		{
			id: 2,
			path: 'assets/images/dessert1.jpg',
		},
		{
			id: 3,
			path: 'assets/images/donats1.jpg',
		},
	];
	recipeData = [
		{
			id: 'mangoMastaniDesert',
			recipeName: 'Mango Mastani',
			recipePhoto: 'assets/images/mango-mastani.jpeg',
			ingredients:
				'**FOR MANGO MILKSHAKE** 1 cup mango 1 cup milk, chilled 2 scoop vanilla ice cream  **FOR 1 SERVE** 2 tbsp mango pieces 2 scoop vanilla ice cream 1 tsp mango pulp 3 tbsp dry fruits, almonds, cashew & pistachios 3 tbsp tutti frutti, red & green ½ cup mango milkshake, prepared 1 cherry',
			recipe:
				' Firstly, prepare a thick mango milkshake by taking 1 cup mango cubes in a blender. add 1 cup chilled milk and 2 scoop vanilla ice cream. blend to thick mango milkshake. keep aside. to assemble, in a tall glass take 2 tbsp mango pieces. add 1 scoop vanilla ice cream. you can alternatively use mango ice cream if you prefer.  also top with 1 tsp mango pulp, 2 tbsp dry fruits and 2 tbsp tutti frutti. further, pour in ½ cup prepared mango milkshake.  scoop it up with vanilla ice cream, dry fruits and tutti frutti.  finally, top with 1 cherry and enjoy mango mastani this summer.',
		},
		{
			id: 'fruitCocktailDesert',
			recipeName: 'Fruit Cocktail',
			recipePhoto: 'assets/images/fruit-cocktail-recipe-fresh-fruit-cocktails.jpeg',
			ingredients:
				' ½ cup cream 1 cup hung curd / greek yogurt 1 tsp vanilla extract 2 tbsp rooh afza 4 tbsp mango, chopped  2 tbsp pomegranate 2 tbsp grapes, chopped 1 tbsp honey  2 tbsp strawberry, chopped 2 tbsp orange, chopped  2 tbsp apple, chopped  2 tbsp banana, chopped 2 tbsp dry fruits, chopped  1 cherry, for garnishing',
			recipe:
				' firstly, in a bowl take ½ cup cream. use heavy cream or whipping cream. beat for 2 minutes or until the soft peaks appear. also add 1 cup hung curd and 1 tsp vanilla extract. you can alternatively use greek yogurt. continue to beat until the mixture turns creamy. creamy yogurt mixture is ready. refrigerate to keep it chilled. to serve, in a tall glass add 2 tbsp rooh afza. you can alternatively use jelly or sabja seeds. now layer with fruits and creamy yogurt mixture.  also, add 1 tbsp honey for sweetness. top with 2 tbsp dry fruits.  garnish with rooh afza and cherry. finally, creamy fruit cocktail is ready to be served chilled.',
		},
		{
			id: 'faloodaDesert',
			recipeName: 'Falooda',
			recipePhoto: 'assets/images/falooda.jpeg',
			ingredients:
				' 1 tbsp sabja seeds / falooda seeds / basil seeds / tukmaria ½ cup falooda sev 4 cup milk 3 tbsp sugar ¼ cup rooz afza / rose syrup 1 cup strawberry gelly, vegetarian  2 scoop vanilla ice cream  2 tbsp tutti frutti 2 tbsp nuts, chopped 2 cherry',
			recipe:
				' In a tall glass add 2 tbsp rooh afza. further add 2 tbsp soaked sabja seeds. now add 2 tbsp cooked falooda sev.  pour 1 cup of chilled milk and stir gently.  drop 2 tbsp of gelly without spilling.  add in a scoop of vanilla ice cream.  further top with 1 tsp of tutti frutti, 1 tsp chopped nuts. drizzle 1 tbsp of rooh afza and top with a cherry. finally, enjoy royal falooda chilled.',
		},
		{
			id: 'mangoKulfiDesert',
			recipeName: 'Mango Kulfi',
			recipePhoto: 'assets/images/mango-kulfi.jpeg',
			ingredients:
				' ¾ cup mangoes, chopped ½ cup full cream milk, chilled 3 pods cardamom / elaichi / elakki, powdered ½ cup full fat cream / malai½ cup condensed milk / nestle milkmaid  3 tbsp saffron / kesar water 5 pistachios, chopped few strands saffron / kesar',
			recipe:
				' firstly, in a large blender take ¾ cup of chopped ripped mangoes. alternatively, use mango puree. also add, cold milk. add more milk and reduce the amount of cream if you are diet conscious. furthermore, add half cup of thickened cream. adding more cream makes malai kulfi more rich and creamy. additionally, add half cup of condensed milk / milkmaid. we are not adding any extra sugar, as condensed milk do contain sugar. also add half tsp of cardamom powder. and add saffron / kesar water for more rich taste and colour. close the blender and blend to smooth milkshake consistency. furthermore, pour the prepared mixture into matka / kulfi mould / glass. also garnish with few chopped pistachios and saffron strands. cover with cling wrap / aluminium foil and freeze for 8 hours. covering with cling wraps avoids kulfi from covering with ice crystals. finally, serve mango matka kulfi chilled.',
		},
		{
			id: 'mangoIceCreamDesert',
			recipeName: 'Mango Ice Cream',
			recipePhoto: 'assets/images/mango-ice-cream.jpeg',
			ingredients:
				' 2  cup thickened cream / heavy cream / whipping cream,   35% milk fat ½ cup  powdered sugar ¾ cup  mango pulp 3 drops yellow food colour, optional',
			recipe:
				' firstly, in a large bowl take 2 cup thickened cream. you can also use amul cream or whipping cream preferably with 35% milk fat. add ½ cup powdered sugar and beat or whisk for 2 minute or till stiff peaks appear. further add ¾ cup mango pulp. to prepare mango pulp blend 2 mango to smooth puree without adding any water. beat or whisk again for 2 minutes or till the mixture turns creamy. optionally add 3 drops of yellow food colour for bright yellow colour. beat till the colour combines well.  transfer the prepared mixture into freezer safe jar. cover with the lid and freeze for 8 hours or till it sets completely. now dip the ice cream scooper in warm water and scoop ice cream. finally, serve mango ice cream scoops garnished with tutti frutti.',
		},
		{
			id: 'strawberryPannaCottaDesert',
			recipeName: 'Strawberry Panna Cotta',
			recipePhoto: 'assets/images/chocolate-ice-cream.jpeg',
			ingredients:
				' 2 cup  thickened cream / heavy cream / whipping cream,  35% milk fat ¾ cup powdered sugar ½ cup cocoa powder ½ cup milk, chilled 1 tbsp vanilla extract pinch of salt',
			recipe:
				' Firstly, in a large bowl take 2 cup thickened cream. you can also use amul cream or whipping cream preferably with 35% milk fat. add ¾ cup powdered sugar and beat or whisk for a minute or till stiff peaks appear. further add ½ cup cocoa powder, ½ cup milk, 1 tbsp vanilla extract and pinch of salt. mix well making sure everything is combined well. beat or whisk again for 2 minutes or till the mixture turns creamy. check for thick and creamy texture. transfer the prepared mixture into freezer safe jar.  cover with the lid and freeze for 8 hours or till it sets completely. now dip the ice cream scooper in warm water and scoop ice cream. finally, serve chocolate ice cream in wafer cone sprinkled with few sugar crystals.',
		},
		{
			id: 'lassiDesert',
			recipeName: 'Lassi',
			recipePhoto: 'assets/images/lassi.jpeg',
			ingredients:
				' 2 cups thick yogurt / curd, fresh 3 tbsp sugar, powdered ¼ cup ice cold water ½ tsp cardamom powder 1 tbsp fresh cream / malai few dry fruits, almonds, cashews, pistachios, chopped',

			recipe:
				' Firstly, take 2 cups of curd in a large jug. whisk till the curd turns smooth. you can also blend using the hand blender / mixi. furthermore, add ice cold water to adjust the consistency. also add 3-4 tbsp of powdered sugar. then add cardamom powder. whisk again till a frothy layer is formed. you can also blend using the hand blender / mixi. additionally add cream for more rich taste. and give a good stir. transfer the lassi to a serving jar. also garnish with few chopped nuts. finally serve chilled along with few ice cubes.',
		},
		{
			id: 'chocolateMousseDesert',
			recipeName: 'Chocolate Mousse',
			recipePhoto: 'assets/images/chocolate-mousse.jpeg',
			ingredients:
				' 200 grams milk chocolate, dairy milk 1 tsp butter ¼ tsp coffee powder 1 cup thickened cream, 35% milk fat  **OTHER INGREDIENTS** whipped cream, for garnish 2 tbsp choco chips  2 tbsp tutti frutti',
			recipe:
				' Firstly, melt the chocolate by double boiler method. heat a saucepan with a cup of water. later place a large bowl, making sure it does not touch the water. furthermore, melt chocolate, butter and coffee powder over simmering water until smooth. adding coffee powder, enhances the flavour of chocolate. stir until chocolate melts completely.  remove bowl from heat and set aside to cool completely.  meanwhile, prepare the whipped cream by using hand blender / whisk or mixer. pour 1 cup of thickened cream or 35% milk fat into a blender. and blend for 40-50 seconds till the cream turns light and fluffy. do not over blend, as they turn to butter. once the chocolate has reached to room temperature, add 2-3 tbsp of prepared whipped cream and fold gently. we are making sure to attain same temperature of cream and chocolate. further, add rest of whipped cream and continue to fold gently. making sure not to loose the light and fluffy texture of whipped cream. then pour the prepared mixture to a glass. refrigerate for 3 hours till they turn thick. furthermore, for decoration, take a zip lock bag and add whipped cream in it. squeeze and create a cone from it. now cut the tip of cone with the help of scissor. further, squeeze into mousse. also garnish with few choco chips and tutti frutti. finally, enjoy choco mouse chilled.',
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
	prevClick() {
		this._router.navigate(['/cake']);
	}
	nextClick() {}
}
