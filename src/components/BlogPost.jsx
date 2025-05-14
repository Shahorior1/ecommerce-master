import React from 'react';
import { CalendarIcon, UserIcon, TagIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

// Import all blog images from assets
import summerFruits from '../assets/357.png'; // Seasonal fruits
import pantryRecipes from '../assets/353.png'; // Pantry recipes
import sustainableKitchen from '../assets/365.png'; // Sustainable kitchen
import farmersMarket from '../assets/384.png'; // Farmers market
import organicVegetables from '../assets/396.png'; // Organic vegetables
import kitchenGadgets from '../assets/408.png'; // Kitchen gadgets
import foodImage1 from '../assets/33.png';
import foodImage2 from '../assets/34.png';
import foodImage3 from '../assets/35.png';
import foodImage4 from '../assets/39.png';
import foodImage5 from '../assets/40.png';
import foodImage6 from '../assets/404.png';

function BlogPost({ postId }) {
  // Sample blog posts data - same as in Blog.jsx but with local images
  const blogPosts = [
    {
      id: 1,
      title: "Seasonal Fruits to Add to Your Summer Shopping List",
      excerpt: "Discover the best seasonal fruits that are not only delicious but packed with essential nutrients for the summer months.",
      image: summerFruits,
      date: "May 15, 2023",
      author: "Emma Johnson",
      category: "Health Tips",
      tags: ["summer", "seasonal", "fruits", "nutrition"],
      content: `
        <p>Summer is the perfect time to indulge in fresh, juicy fruits that not only taste great but also provide essential nutrients to keep you healthy during the warmer months. Here's our guide to the best seasonal fruits to add to your shopping list this summer.</p>
        
        <h2>Watermelon</h2>
        <p>No summer is complete without watermelon. This hydrating fruit is over 90% water, making it the perfect refreshment on hot days. Watermelons are rich in lycopene, which gives them their red color and acts as a powerful antioxidant in your body.</p>
        
        <h2>Berries</h2>
        <p>Strawberries, blueberries, blackberries, and raspberries are all in season during summer and pack a nutritional punch. They're loaded with antioxidants, vitamin C, and fiber. Try adding them to your breakfast cereal, yogurt, or enjoy them as a healthy snack.</p>
        
        <h2>Peaches</h2>
        <p>Summer peaches are juicy, sweet, and aromatic. They're a good source of vitamins A and C, potassium, and fiber. Enjoy them fresh, grilled, or in a homemade peach cobbler.</p>
        
        <h2>Mangoes</h2>
        <p>Known as the "king of fruits," mangoes are at their best during summer. They're packed with over 20 different vitamins and minerals, including vitamin C, folate, and various B vitamins.</p>
        
        <h2>Cherries</h2>
        <p>These small fruits have a short season, typically peaking in June and July. Cherries contain anthocyanins, which give them their deep red color and act as powerful antioxidants that may help reduce inflammation.</p>
        
        <h2>Tips for Choosing the Best Summer Fruits</h2>
        <ul>
          <li>Look for fruits that feel heavy for their size, which indicates juiciness.</li>
          <li>Choose fruits with vibrant colors and minimal blemishes.</li>
          <li>For the best flavor, allow fruits to ripen at room temperature before eating.</li>
          <li>Buy locally grown fruits when possible for the freshest options.</li>
          <li>Store most ripe fruits in the refrigerator to extend their shelf life.</li>
        </ul>
        
        <p>Incorporating these seasonal fruits into your diet isn't just delicious—it's a great way to ensure you're getting a variety of nutrients while supporting local farmers. So next time you're at the grocery store or farmers market, fill your basket with these summer gems and enjoy all the health benefits they have to offer.</p>
      `
    },
    {
      id: 2,
      title: "10 Quick and Easy Recipes Using Pantry Staples",
      excerpt: "When you're low on fresh ingredients, these easy recipes using common pantry staples will save your mealtime.",
      image: pantryRecipes,
      date: "April 28, 2023",
      author: "Michael Chen",
      category: "Recipes",
      tags: ["recipes", "pantry", "quick meals", "easy cooking"],
      content: `
        <p>We've all been there - it's dinnertime, you're hungry, but the fridge is looking pretty empty. Don't reach for the takeout menu just yet! With a well-stocked pantry, you can whip up delicious, nutritious meals in no time. Here are 10 quick and easy recipes using ingredients you probably already have on hand.</p>
        
        <h2>1. Tomato Soup with Grilled Cheese Croutons</h2>
        <p>Transform a can of tomato soup by adding a pinch of dried basil and a dash of cream. Top with small squares of grilled cheese sandwich for a fun twist on a classic comfort food duo.</p>
        
        <h2>2. Tuna Pasta Salad</h2>
        <p>Mix canned tuna with cooked pasta, a spoonful of mayonnaise, a squeeze of lemon juice, and whatever veggies you have on hand (frozen peas work great). Season with salt, pepper, and dried herbs.</p>
        
        <h2>3. Bean and Rice Burrito Bowl</h2>
        <p>Layer cooked rice with canned beans (drained and rinsed), canned corn, and your favorite spices. Top with a dollop of salsa and a sprinkle of cheese for a satisfying meal in minutes.</p>
        
        <h2>4. Pantry Pasta Puttanesca</h2>
        <p>Simmer canned tomatoes with garlic, anchovies (or olive tapenade), capers, and olives for a savory pasta sauce that's ready by the time your pasta is cooked.</p>
        
        <h2>5. Coconut Curry Lentil Soup</h2>
        <p>Combine dried lentils, canned coconut milk, curry powder, and vegetable broth for a hearty, flavorful soup that's packed with protein.</p>
        
        <h2>6. Mediterranean Chickpea Salad</h2>
        <p>Toss canned chickpeas with olive oil, lemon juice, dried herbs, and any vegetables you have on hand. This protein-rich salad keeps well in the refrigerator.</p>
        
        <h2>7. Quick Black Bean Quesadillas</h2>
        <p>Spread mashed black beans on a tortilla, sprinkle with cheese and spices, then fold and cook until crispy. Serve with salsa for an easy Mexican-inspired meal.</p>
        
        <h2>8. Peanut Butter Noodles</h2>
        <p>Whisk together peanut butter, soy sauce, and a touch of honey, then toss with cooked noodles. Add a dash of hot sauce if you like it spicy.</p>
        
        <h2>9. Savory Oatmeal with Egg</h2>
        <p>Cook oats with broth instead of water, then top with a fried egg and a sprinkle of cheese or herbs for a hearty breakfast-for-dinner option.</p>
        
        <h2>10. Tuna Melt English Muffins</h2>
        <p>Mix canned tuna with mayonnaise, spread on English muffin halves, top with cheese, and broil until bubbly. Quick, simple, and satisfying.</p>
        
        <p>Remember, cooking with pantry staples is all about creativity and flexibility. Don't be afraid to substitute ingredients based on what you have available. With these simple recipes in your arsenal, you'll never have to worry about what to cook when the fridge is bare!</p>
      `
    },
    {
      id: 3,
      title: "How to Create a Sustainable Kitchen: Reduce Food Waste",
      excerpt: "Simple but effective strategies to minimize food waste in your kitchen and contribute to a more sustainable lifestyle.",
      image: sustainableKitchen,
      date: "April 10, 2023",
      author: "Sophia Williams",
      category: "Sustainability",
      tags: ["sustainability", "food waste", "green living", "eco-friendly"],
      content: `
        <p>Food waste is a global problem with significant environmental, economic, and social impacts. The good news is that small changes in our kitchens can make a big difference. Here are practical strategies to reduce food waste and create a more sustainable kitchen.</p>
        
        <h2>Plan Your Meals</h2>
        <p>Before heading to the grocery store, plan your meals for the week. Check what ingredients you already have and make a shopping list for only what you need. This reduces impulse purchases and helps ensure that everything you buy gets used.</p>
        
        <h2>Store Food Properly</h2>
        <p>Proper storage extends the life of your food. Learn which fruits and vegetables should be refrigerated and which should not. For example, tomatoes, bananas, and potatoes do better at room temperature, while berries and leafy greens need refrigeration.</p>
        
        <h2>Understand Food Labels</h2>
        <p>"Best by" and "use by" dates are often manufacturers' suggestions for peak quality, not safety dates. Use your senses to determine if food is still good to eat rather than automatically discarding food past its labeled date.</p>
        
        <h2>Embrace Imperfect Produce</h2>
        <p>Don't overlook fruits and vegetables with odd shapes or minor blemishes. They're just as nutritious and tasty as their perfect-looking counterparts. Some grocery stores even offer discounts on imperfect produce.</p>
        
        <h2>Get Creative with Leftovers</h2>
        <p>Transform leftovers into new meals. Yesterday's roasted vegetables can become today's frittata. Leftover rice works great in stir-fries or rice pudding. Challenge yourself to repurpose leftovers in creative ways.</p>
        
        <h2>Use All Parts of Ingredients</h2>
        <p>Many parts of produce that are typically discarded are actually edible and nutritious. Beet greens can be sautéed like spinach, broccoli stems can be sliced and cooked, and citrus peels can be zested for flavor or candied for treats.</p>
        
        <h2>Start Composting</h2>
        <p>Not all food waste can be avoided. For scraps that can't be used, composting is an excellent alternative to the landfill. Even apartment dwellers can compost with compact systems designed for small spaces.</p>
        
        <h2>Preserve Seasonal Abundance</h2>
        <p>When fruits and vegetables are in season and abundant, preserve them for later use. Freezing, canning, pickling, and dehydrating are all great methods to extend the life of seasonal produce.</p>
        
        <p>Remember that reducing food waste isn't about perfection—it's about progress. Every small step contributes to a more sustainable kitchen and planet. By being mindful of our food consumption and disposal, we can all make a meaningful impact on reducing food waste.</p>
      `
    },
    {
      id: 4,
      title: "The Benefits of Shopping at Local Farmers Markets",
      excerpt: "Why supporting local farmers markets can benefit your health, community, and the environment.",
      image: farmersMarket,
      date: "March 22, 2023",
      author: "David Rodriguez",
      category: "Community",
      tags: ["local", "farmers market", "community", "fresh produce"],
      content: `
        <p>Farmers markets have experienced a resurgence in popularity in recent years, and for good reason. These vibrant community hubs offer a wealth of benefits that extend far beyond simply providing a place to buy fruits and vegetables. Let's explore the many advantages of shopping at your local farmers market.</p>
        
        <h2>Fresher, More Nutritious Food</h2>
        <p>Produce at farmers markets is typically harvested within 24 hours of being sold, making it exceptionally fresh compared to supermarket alternatives that may have traveled thousands of miles and spent days in transit. This freshness not only translates to better flavor but also higher nutritional value, as vital nutrients begin to degrade soon after harvest.</p>
        
        <h2>Seasonal Eating</h2>
        <p>Shopping at farmers markets encourages seasonal eating, which aligns our diets with nature's cycles. Seasonal produce is generally more flavorful, nutritious, and affordable. Plus, varying your diet throughout the year ensures a wider range of nutrients and keeps meals interesting and diverse.</p>
        
        <h2>Supporting Local Economy</h2>
        <p>When you purchase from local farmers, your money stays within your community. It goes directly to farmers without middlemen, helping to sustain local farms and create jobs. Studies have shown that for every dollar spent at a local business, approximately 67 cents stays in the local economy, compared to just 43 cents when shopping at a chain store.</p>
        
        <h2>Environmental Benefits</h2>
        <p>Local food doesn't have to travel far to reach your table, which significantly reduces its carbon footprint. Additionally, many small-scale farmers employ sustainable growing practices, such as reduced pesticide use, crop rotation, and composting, which benefit soil health and biodiversity.</p>
        
        <h2>Connecting with Your Food</h2>
        <p>Farmers markets offer a unique opportunity to meet the people who grow your food. You can ask questions about growing practices, get cooking tips, and learn about unfamiliar varieties. This connection helps develop a deeper appreciation for the food on your plate and the work that went into producing it.</p>
        
        <h2>Building Community</h2>
        <p>Farmers markets serve as community gathering places where neighbors can meet, local musicians can perform, and children can learn about where their food comes from. This sense of community is increasingly valuable in our digital age, where face-to-face interactions are becoming less common.</p>
        
        <h2>Preserving Agricultural Knowledge</h2>
        <p>Small-scale farmers often maintain agricultural traditions and grow heritage varieties that might otherwise be lost. By supporting these farmers, you're helping to preserve biodiversity and agricultural knowledge for future generations.</p>
        
        <p>Next time you have the opportunity, spend a Saturday morning at your local farmers market. Engage with the vendors, try something new, and enjoy the vibrant atmosphere. Your taste buds, local economy, and environment will all thank you for it.</p>
      `
    },
    {
      id: 5,
      title: "Guide to Choosing the Best Organic Vegetables",
      excerpt: "Learn how to select the freshest and most nutritious organic vegetables for your family's meals.",
      image: organicVegetables,
      date: "March 5, 2023",
      author: "Emma Johnson",
      category: "Organic Living",
      tags: ["organic", "vegetables", "shopping guide", "health"],
      content: `
        <p>Choosing organic vegetables is a great way to reduce exposure to synthetic pesticides and fertilizers while supporting more sustainable farming practices. But beyond simply looking for the organic label, there are several factors to consider when selecting the best organic vegetables for your family. Here's a comprehensive guide to help you make informed choices at the grocery store or farmers market.</p>
        
        <h2>Understanding Organic Labels</h2>
        <p>In the United States, vegetables labeled as "USDA Organic" are grown and processed according to federal guidelines addressing soil quality, pest and weed control, use of additives, and more. For a product to be certified organic, it must be grown without synthetic pesticides, bioengineered genes (GMOs), petroleum-based fertilizers, and sewage sludge-based fertilizers.</p>
        
        <h2>Seasonal Selection</h2>
        <p>Vegetables that are in season typically offer the best flavor, nutritional value, and price. They're also more likely to be locally grown, which means they haven't traveled far to reach your table. Familiarize yourself with seasonal vegetables in your region for optimal selection throughout the year.</p>
        
        <h2>Visual Cues for Freshness</h2>
        <p>Regardless of organic status, fresh vegetables should look vibrant and firm. Avoid vegetables with wilting, yellowing, or browning. Leafy greens should be crisp, not limp. Root vegetables should feel heavy for their size and firm to the touch.</p>
        
        <h2>Aroma Matters</h2>
        <p>Many vegetables have a distinctive, fresh smell when they're at peak quality. For example, tomatoes should smell slightly sweet and earthy. Trust your nose—if something smells off or has no smell at all, it might not be fresh.</p>
        
        <h2>Size Considerations</h2>
        <p>Bigger isn't always better when it comes to organic vegetables. Moderately sized vegetables often have better flavor concentration and texture. Very large vegetables might be tough or less flavorful.</p>
        
        <h2>Local vs. Organic</h2>
        <p>Sometimes you might need to choose between locally grown conventional produce and organic produce shipped from far away. This is a personal decision that depends on your priorities. Local produce might be fresher and support local farmers, while organic ensures certain growing standards. When possible, seek out local organic options for the best of both worlds.</p>
        
        <h2>The Dirty Dozen and Clean Fifteen</h2>
        <p>If budget constraints make buying all organic produce difficult, prioritize based on the "Dirty Dozen" and "Clean Fifteen" lists published annually by the Environmental Working Group. The Dirty Dozen lists fruits and vegetables with the highest pesticide residues when grown conventionally, making them worth buying organic when possible. The Clean Fifteen have the lowest levels of pesticide residues, so conventional versions may be acceptable alternatives.</p>
        
        <h2>Storage Best Practices</h2>
        <p>Proper storage extends the life of your organic vegetables. Some vegetables like tomatoes, potatoes, and onions should be stored at room temperature, while others like leafy greens and broccoli do best in the refrigerator. Store vegetables unwashed until ready to use to prevent moisture-induced spoilage.</p>
        
        <p>Remember that imperfections in organic vegetables are normal and even expected, as they're grown without synthetic pesticides. Small blemishes or irregular shapes don't affect nutritional value or taste. By focusing on freshness indicators rather than cosmetic perfection, you'll select the best organic vegetables for your table.</p>
      `
    },
    {
      id: 6,
      title: "Essential Kitchen Gadgets That Save Time and Money",
      excerpt: "These innovative kitchen tools will streamline your cooking process and help you become more efficient in the kitchen.",
      image: kitchenGadgets,
      date: "February 17, 2023",
      author: "Michael Chen",
      category: "Kitchen Tips",
      tags: ["gadgets", "kitchen tools", "time-saving", "cooking"],
      content: `
        <p>The right kitchen gadgets can transform your cooking experience, making meal preparation faster, easier, and more enjoyable. While you don't need every gadget on the market, strategic investments in quality tools can save you time and money in the long run. Here's our guide to essential kitchen gadgets that truly earn their keep.</p>
        
        <h2>Instant Pot or Multi-Cooker</h2>
        <p>This versatile appliance combines the functions of a pressure cooker, slow cooker, rice cooker, steamer, and more. It significantly reduces cooking time for dishes like stews, beans, and tough cuts of meat that would typically require hours of simmering. By using less energy than conventional cooking methods and enabling easy batch cooking, an Instant Pot can help reduce your utility bills and food waste.</p>
        
        <h2>Quality Chef's Knife</h2>
        <p>A good chef's knife isn't just a gadget—it's the foundation of efficient cooking. Investing in a high-quality knife that feels comfortable in your hand will make chopping, slicing, and dicing faster and safer. Proper care will keep it sharp and functional for decades, making it worth the upfront investment.</p>
        
        <h2>Immersion Blender</h2>
        <p>Also known as a stick blender, this tool allows you to puree soups, sauces, and smoothies directly in the container you're using, eliminating the need to transfer hot or messy ingredients to a traditional blender. It's compact, easy to clean, and perfect for quick tasks that don't warrant pulling out a full-sized blender.</p>
        
        <h2>Food Processor</h2>
        <p>For larger jobs, a food processor is unbeatable. It can chop, slice, shred, and puree ingredients in seconds, saving significant preparation time. Use it to make homemade hummus, pesto, pie crust, or to quickly prep vegetables for recipes. The time saved can make home cooking more feasible on busy weeknights, reducing reliance on expensive takeout.</p>
        
        <h2>Digital Food Scale</h2>
        <p>Precise measurements are crucial for successful baking and can improve efficiency in all cooking. A digital scale ensures accuracy and can actually reduce cleanup by allowing you to measure ingredients directly into your mixing bowl (using the tare function to reset between additions). It's also essential for portion control if you're monitoring food intake.</p>
        
        <h2>Silicone Spatulas and Spoonulas</h2>
        <p>These flexible tools help you scrape every last bit of batter, sauce, or dressing from bowls and jars, reducing waste. Heat-resistant silicone versions can be used while cooking without risk of melting. The ability to get every drop of expensive ingredients like maple syrup or almond butter adds up to noticeable savings over time.</p>
        
        <h2>Electric Kettle</h2>
        <p>An electric kettle boils water faster and more efficiently than a stovetop kettle or pot. It's perfect for tea, pour-over coffee, instant soups, or quickly starting pasta or blanching vegetables. Models with temperature control are ideal for different types of tea or coffee that require specific water temperatures below boiling.</p>
        
        <h2>Herb Keeper</h2>
        <p>Fresh herbs add tremendous flavor to cooking but often wilt before you can use the entire bunch. An herb keeper extends the life of herbs like cilantro, parsley, and basil by weeks, reducing waste and saving you from buying new herbs for each recipe. The savings quickly recoup the modest cost of this simple container.</p>
        
        <h2>Choosing and Maintaining Your Gadgets</h2>
        <p>When selecting kitchen gadgets, focus on versatility, durability, and ease of cleaning. Read reviews, check warranty information, and when possible, choose items with simple mechanisms that are less likely to break. Proper maintenance extends the life of your tools: follow manufacturer's instructions for cleaning, avoid the dishwasher when recommended, and store items properly to prevent damage.</p>
        
        <p>Remember that the best kitchen gadgets are the ones you'll actually use regularly. Consider your cooking habits and preferences before investing. A well-chosen collection of quality tools will serve you well for years, making cooking more enjoyable and efficient while helping you create delicious, cost-effective meals at home.</p>
      `
    },
    {
      id: 7,
      title: "Healthy Breakfast Ideas for Busy Mornings",
      excerpt: "Start your day right with these quick and nutritious breakfast options that will keep you energized all morning.",
      image: foodImage1,
      date: "January 25, 2023",
      author: "Emily Parker",
      category: "Health Tips",
      tags: ["breakfast", "healthy eating", "quick meals", "nutrition"],
      content: `
        <p>A nutritious breakfast kickstarts your metabolism and provides the energy you need to face the day. But on busy mornings, it's all too easy to skip this important meal or grab something unhealthy on the go. Here are some quick, healthy breakfast ideas that can be prepared in minutes or made ahead of time.</p>
        
        <h2>Overnight Oats</h2>
        <p>Prepare these the night before for a grab-and-go breakfast. Mix rolled oats with milk or yogurt, add your favorite fruits, nuts, and a touch of honey or maple syrup. Let it sit in the refrigerator overnight, and you'll have a delicious, fiber-rich breakfast ready in the morning.</p>
        
        <h2>Smoothie Bowls</h2>
        <p>Blend frozen fruits with a liquid base like almond milk or yogurt until thick. Pour into a bowl and top with granola, fresh fruits, and a sprinkle of seeds for added nutrients and texture. It's like eating ice cream for breakfast, but healthy!</p>
        
        <h2>Avocado Toast</h2>
        <p>This trendy breakfast is popular for good reason. Whole grain toast topped with mashed avocado provides healthy fats and fiber. Add a sprinkle of salt, red pepper flakes, and a poached egg for protein to make it even more satisfying.</p>
        
        <h2>Greek Yogurt Parfait</h2>
        <p>Layer Greek yogurt with fruits, honey, and granola for a protein-packed breakfast that will keep you full until lunch. Prepare in a jar for an easy grab-and-go option.</p>
        
        <h2>Vegetable Egg Muffins</h2>
        <p>Whisk eggs with chopped vegetables and a bit of cheese, then bake in muffin tins. These can be made ahead and refrigerated or frozen, then quickly reheated on busy mornings.</p>
        
        <h2>Whole Grain Breakfast Wrap</h2>
        <p>Spread a whole grain tortilla with hummus, add some spinach, sliced avocado, and a hard-boiled egg for a portable breakfast full of protein and vegetables.</p>
        
        <h2>Chia Seed Pudding</h2>
        <p>Mix chia seeds with milk or a dairy alternative and let sit overnight. The seeds absorb the liquid and create a pudding-like texture. Add fruits, nuts, or a drizzle of honey for flavor.</p>
        
        <h2>Breakfast Smoothie</h2>
        <p>Blend fruits, vegetables, yogurt or milk, and a source of protein like protein powder or nut butter for a complete meal you can drink on your way to work or school.</p>
        
        <p>Remember, what you eat for breakfast sets the tone for your entire day. By choosing nutrient-dense, balanced options, you'll have sustained energy and better focus throughout the morning. Even on the busiest days, taking just a few minutes for breakfast is an investment in your health and productivity.</p>
      `
    },
    // Add content for blog posts 8-12 similarly
  ];
  
  // Find the selected post based on the postId
  const post = blogPosts.find(post => post.id.toString() === postId) || blogPosts[0];
  
  // Related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .filter(p => p.category === post.category || p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <a href="#blog" className="flex items-center text-purple-600 hover:text-purple-800 transition-colors">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            <span>Back to Blog</span>
          </a>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-96 object-cover"
            />
          </div>
          
          {/* Post Header */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full mr-4">{post.category}</span>
              <div className="flex items-center mr-4">
                <CalendarIcon className="h-5 w-5 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <UserIcon className="h-5 w-5 mr-1" />
                <span>{post.author}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600">{post.excerpt}</p>
          </div>
          
          {/* Post Content */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            
            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center">
                <TagIcon className="h-5 w-5 text-gray-500 mr-2" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-purple-100 hover:text-purple-700 transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-12">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
                <img 
                  src={`https://ui-avatars.com/api/?name=${post.author.replace(' ', '+')}&background=random`} 
                  alt={post.author} 
                  className="h-full w-full object-cover" 
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{post.author}</h3>
                <p className="text-gray-600">Food enthusiast and nutrition expert with over 10 years of experience in developing healthy recipes and sustainable cooking practices.</p>
              </div>
            </div>
          </div>
          
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded mb-2">{relatedPost.category}</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{relatedPost.title}</h3>
                      <a href={`#blog/${relatedPost.id}`} className="text-purple-600 text-sm font-medium hover:text-purple-800 transition-colors">
                        Read Article
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Comment Section Placeholder */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Leave a Comment</h2>
            <p className="text-gray-600 mb-6">Your email address will not be published. Required fields are marked *</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment *</label>
                <textarea
                  id="comment"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input id="save-info" type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                <label htmlFor="save-info" className="ml-2 block text-sm text-gray-700">
                  Save my name and email for the next time I comment
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost; 