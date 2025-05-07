
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogPost() {
  const { id } = useParams();
  
  // هذه بيانات وهمية للمدونات، يمكن استبدالها بطلب API فعلي في المستقبل
  const blogPosts = [
    {
      id: 1,
      title: "بناء واجهات متجاوبة",
      content: `
        <p>تعلم كيفية إنشاء واجهات تعمل على جميع أحجام الأجهزة دون تنازل.</p>
        
        <h2>مقدمة</h2>
        <p>في عالم اليوم حيث يتصفح المستخدمون المواقع على مجموعة متنوعة من الأجهزة، أصبح تصميم واجهات متجاوبة أمرًا ضروريًا. لا يتعلق الأمر فقط بجعل موقعك يبدو جيدًا على الهواتف المحمولة، بل يتعلق بتقديم تجربة سلسة بغض النظر عن الجهاز المستخدم.</p>
        
        <h2>أساسيات التصميم المتجاوب</h2>
        <p>يبدأ التصميم المتجاوب باستخدام تقنيات CSS المناسبة مثل Media Queries والـ Flexbox والـ CSS Grid. هذه التقنيات تسمح لك بتعديل تخطيط موقعك بناءً على حجم الشاشة.</p>
        
        <h2>استخدام Flexbox</h2>
        <p>يعد Flexbox أداة قوية لتصميم واجهات متجاوبة. فهو يسمح لك بإنشاء تخطيطات مرنة يمكن أن تتكيف مع مختلف أحجام الشاشات. إليك مثال بسيط على كيفية استخدامه:</p>
        
        <pre><code>
        .container {
          display: flex;
          flex-wrap: wrap;
        }
        
        .item {
          flex: 1 1 300px;
          margin: 10px;
        }
        </code></pre>
        
        <h2>استخدام Media Queries</h2>
        <p>تسمح لك Media Queries بتطبيق أنماط CSS مختلفة بناءً على خصائص الجهاز، مثل عرض الشاشة. على سبيل المثال:</p>
        
        <pre><code>
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
        }
        </code></pre>
        
        <h2>اختبار التصميم المتجاوب</h2>
        <p>من المهم اختبار موقعك على مجموعة متنوعة من الأجهزة للتأكد من أن التصميم المتجاوب يعمل بشكل صحيح. يمكنك استخدام أدوات المطور في المتصفح لمحاكاة أجهزة مختلفة، ولكن من الأفضل أيضًا اختبار الموقع على أجهزة حقيقية إذا أمكن.</p>
        
        <h2>الخلاصة</h2>
        <p>إن بناء واجهات متجاوبة هو مهارة أساسية لمطوري الويب الحديثين. باستخدام التقنيات الصحيحة واختبار موقعك بشكل شامل، يمكنك إنشاء تجربة مستخدم رائعة على جميع الأجهزة.</p>
      `,
      date: "1 مايو 2025",
      category: "تطوير",
      readTime: "5 دقائق قراءة",
      author: "أدهم سيد",
      image: "https://placehold.co/800x400"
    },
    {
      id: 2,
      title: "مستقبل الرسوم المتحركة على الويب",
      content: `
        <p>استكشاف تقنيات الرسوم المتحركة الحديثة التي تعزز تجربة المستخدم دون التضحية بالأداء.</p>
        
        <h2>مقدمة لرسوم الويب المتحركة</h2>
        <p>أصبحت الرسوم المتحركة جزءًا لا يتجزأ من تصميم الويب الحديث. فهي تساعد في توجيه انتباه المستخدمين، وتوضيح التغييرات في واجهة المستخدم، وإضافة شخصية للموقع.</p>
        
        <h2>تقنيات الرسوم المتحركة الحديثة</h2>
        <p>هناك العديد من التقنيات المختلفة لإنشاء رسوم متحركة على الويب، بما في ذلك:</p>
        <ul>
          <li>CSS Animations و Transitions</li>
          <li>JavaScript و requestAnimationFrame</li>
          <li>مكتبات مثل GSAP و Anime.js</li>
          <li>SVG Animations</li>
          <li>WebGL للرسوم المتحركة ثلاثية الأبعاد</li>
        </ul>
        
        <h2>أفضل الممارسات للرسوم المتحركة</h2>
        <p>عند إنشاء رسوم متحركة للويب، من المهم مراعاة ما يلي:</p>
        <ol>
          <li><strong>الأداء:</strong> تأكد من أن الرسوم المتحركة لا تؤثر سلبًا على أداء موقعك.</li>
          <li><strong>الغرض:</strong> استخدم الرسوم المتحركة لتحسين تجربة المستخدم، وليس فقط للتأثير البصري.</li>
          <li><strong>إمكانية الوصول:</strong> تأكد من أن الرسوم المتحركة لا تسبب مشاكل للمستخدمين الذين يعانون من حساسية للحركة.</li>
        </ol>
        
        <h2>مثال على CSS Animation</h2>
        <pre><code>
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .element {
          animation: fadeIn 1s ease-in-out;
        }
        </code></pre>
        
        <h2>المستقبل: Web Animations API</h2>
        <p>توفر واجهة برمجة تطبيقات الرسوم المتحركة على الويب طريقة أكثر قوة وكفاءة لإنشاء رسوم متحركة باستخدام JavaScript. إليك مثال بسيط:</p>
        
        <pre><code>
        const element = document.querySelector('.element');
        const animation = element.animate([
          { opacity: 0 },
          { opacity: 1 }
        ], {
          duration: 1000,
          easing: 'ease-in-out'
        });
        </code></pre>
        
        <h2>الخلاصة</h2>
        <p>تطور الرسوم المتحركة على الويب بسرعة، مما يوفر للمصممين والمطورين أدوات أكثر قوة لإنشاء تجارب مستخدم مذهلة. باستخدام التقنيات المناسبة والالتزام بأفضل الممارسات، يمكنك إنشاء رسوم متحركة تعزز موقعك دون التضحية بالأداء أو إمكانية الوصول.</p>
      `,
      date: "15 أبريل 2025",
      category: "تصميم",
      readTime: "8 دقائق قراءة",
      author: "أدهم سيد",
      image: "https://placehold.co/800x400"
    },
    {
      id: 3,
      title: "إمكانية الوصول في تطبيقات الويب الحديثة",
      content: `
        <p>لماذا يجب أن تكون إمكانية الوصول أولوية وكيفية تنفيذها في مشاريعك.</p>
        
        <h2>أهمية إمكانية الوصول</h2>
        <p>تضمن إمكانية الوصول أن الأشخاص ذوي الإعاقة يمكنهم استخدام موقعك أو تطبيقك على الويب. إنها ليست مجرد ميزة إضافية - إنها ضرورة أخلاقية وقانونية في العديد من البلدان.</p>
        
        <h2>المبادئ الأساسية لإمكانية الوصول</h2>
        <p>تتضمن مبادئ WCAG (إرشادات إمكانية الوصول إلى محتوى الويب) أربعة مبادئ رئيسية:</p>
        <ul>
          <li><strong>قابل للإدراك:</strong> يجب أن تكون المعلومات وعناصر واجهة المستخدم قابلة للعرض للمستخدمين.</li>
          <li><strong>قابل للتشغيل:</strong> يجب أن تكون عناصر واجهة المستخدم والتنقل قابلة للتشغيل.</li>
          <li><strong>مفهوم:</strong> يجب أن تكون المعلومات وتشغيل واجهة المستخدم مفهومة.</li>
          <li><strong>قوي:</strong> يجب أن يكون المحتوى قويًا بما يكفي ليتم تفسيره بشكل موثوق به من قبل مجموعة واسعة من وكلاء المستخدمين، بما في ذلك التقنيات المساعدة.</li>
        </ul>
        
        <h2>تنفيذ إمكانية الوصول في مشاريعك</h2>
        <h3>استخدام HTML الدلالي</h3>
        <p>استخدم عناصر HTML المناسبة لمحتواك. على سبيل المثال، استخدم عناصر الرأس (h1، h2، إلخ) للعناوين، و<button> للأزرار، و<a> للروابط.</p>
        
        <h3>توفير نص بديل للصور</h3>
        <pre><code>&lt;img src="صورة.jpg" alt="وصف الصورة" /&gt;</code></pre>
        
        <h3>ضمان تباين الألوان</h3>
        <p>تأكد من وجود تباين كافٍ بين لون النص والخلفية.</p>
        
        <h3>دعم التنقل لوحة المفاتيح</h3>
        <p>يجب أن تكون جميع الوظائف متاحة باستخدام لوحة المفاتيح فقط.</p>
        
        <h3>إضافة تسميات للنماذج</h3>
        <pre><code>
        &lt;label for="username"&gt;اسم المستخدم:&lt;/label&gt;
        &lt;input id="username" type="text" /&gt;
        </code></pre>
        
        <h2>اختبار إمكانية الوصول</h2>
        <p>استخدم أدوات مثل Lighthouse و axe لاختبار موقعك لمشاكل إمكانية الوصول. بالإضافة إلى ذلك، اختبر موقعك باستخدام قارئ شاشة للتأكد من أنه يعمل بشكل جيد.</p>
        
        <h2>الخلاصة</h2>
        <p>إن جعل مواقعك وتطبيقاتك متاحة ليس مجرد شيء "جيد للقيام به" - إنها مسؤولية أساسية لضمان أن الويب متاح للجميع. باتباع المبادئ الموضحة في هذه المقالة، يمكنك إنشاء تطبيقات ويب يمكن الوصول إليها بشكل أفضل وأكثر شمولاً.</p>
      `,
      date: "22 مارس 2025",
      category: "تطوير",
      readTime: "7 دقائق قراءة",
      author: "أدهم سيد",
      image: "https://placehold.co/800x400"
    },
    {
      id: 4,
      title: "سير عملي التطويري في 2025",
      content: `
        <p>الأدوات والملحقات والعمليات التي أستخدمها للبقاء منتجًا ومركزًا.</p>
        
        <h2>بيئة العمل</h2>
        <p>تعد بيئة العمل المريحة والفعالة أمرًا بالغ الأهمية للإنتاجية. إليك كيف أنظم بيئة عملي:</p>
        <ul>
          <li><strong>المكتب:</strong> مكتب قابل للتعديل للوقوف/الجلوس للتبديل بين الوضعيات خلال اليوم.</li>
          <li><strong>الشاشات:</strong> إعداد مزدوج الشاشة مع شاشة رئيسية 4K وشاشة ثانوية عمودية.</li>
          <li><strong>لوحة المفاتيح:</strong> لوحة مفاتيح ميكانيكية للكتابة المريحة.</li>
          <li><strong>الإضاءة:</strong> إضاءة طبيعية خلال النهار، ومصباح مكتبي دافئ للمساء.</li>
        </ul>
        
        <h2>أدوات البرمجة</h2>
        <p>بصفتي مطور واجهات أمامية، أعتمد على مجموعة من الأدوات للبقاء منتجًا:</p>
        <h3>محرر الكود</h3>
        <p>أستخدم VS Code مع الإضافات التالية:</p>
        <ul>
          <li>ESLint و Prettier للتنسيق المتسق للكود</li>
          <li>GitHub Copilot للمساعدة في الكتابة</li>
          <li>Live Share للتعاون</li>
          <li>GitLens لتحسين سير عمل Git</li>
        </ul>
        
        <h3>أدوات الإنتاجية</h3>
        <p>لتنظيم عملي وأفكاري، أستخدم:</p>
        <ul>
          <li>Notion لملاحظات المشروع والوثائق</li>
          <li>Figma للتصميم والنماذج الأولية</li>
          <li>Raycast كبديل للمشغل</li>
          <li>Arc كمتصفح رئيسي</li>
        </ul>
        
        <h2>روتين العمل اليومي</h2>
        <p>روتين متسق يساعدني على البقاء مركزًا ومنتجًا:</p>
        <ol>
          <li><strong>الصباح (8-10 صباحًا):</strong> العمل العميق والمهام الصعبة</li>
          <li><strong>منتصف النهار (10-12 ظهرًا):</strong> الاجتماعات والتعاون</li>
          <li><strong>بعد الظهر (1-3 مساءً):</strong> البرمجة والتنفيذ</li>
          <li><strong>أواخر بعد الظهر (3-5 مساءً):</strong> مراجعة الكود والتوثيق</li>
          <li><strong>المساء:</strong> التعلم والتجريب (متى شئت)</li>
        </ol>
        
        <h2>الحفاظ على التوازن</h2>
        <p>بينما يعد سير العمل الفعال أمرًا مهمًا، فإن الحفاظ على التوازن أمر حيوي لتجنب الإرهاق:</p>
        <ul>
          <li>فترات راحة منتظمة باستخدام تقنية بومودورو (25 دقيقة عمل، 5 دقائق راحة)</li>
          <li>التمارين اليومية لتنشيط العقل والجسم</li>
          <li>تحديد وقت بعيدًا عن الشاشة لإعادة الشحن</li>
        </ul>
        
        <h2>الخلاصة</h2>
        <p>سير العمل المثالي هو الذي يتطور باستمرار. أجد أن تجربة أدوات وعمليات جديدة بشكل دوري تبقيني متحمسًا ومنتجًا. ما هي أدواتك وعملياتك المفضلة؟ أنا دائمًا منفتح لاكتشاف طرق جديدة لتحسين سير عملي.</p>
      `,
      date: "10 مارس 2025",
      category: "سير العمل",
      readTime: "6 دقائق قراءة",
      author: "أدهم سيد",
      image: "https://placehold.co/800x400"
    },
    {
      id: 5,
      title: "التصميم مع الوضع الداكن في الاعتبار",
      content: `
        <p>أفضل الممارسات لإنشاء واجهات جميلة تعمل بشكل جيد في كل من الوضع الفاتح والداكن.</p>
        
        <h2>لماذا الوضع الداكن؟</h2>
        <p>أصبح الوضع الداكن شائعًا جدًا في السنوات الأخيرة، وذلك لعدة أسباب:</p>
        <ul>
          <li>يقلل من إجهاد العين في البيئات منخفضة الإضاءة</li>
          <li>يمكن أن يوفر طاقة البطارية على شاشات OLED</li>
          <li>يوفر مظهرًا أنيقًا وعصريًا</li>
          <li>يمنح المستخدمين خيارًا لتخصيص تجربتهم</li>
        </ul>
        
        <h2>أساسيات التصميم للوضع الداكن</h2>
        <p>عند تصميم للوضع الداكن، هناك بعض المبادئ الرئيسية التي يجب مراعاتها:</p>
        
        <h3>1. تجنب الأسود الخالص</h3>
        <p>بدلاً من استخدام الأسود الخالص (#000000)، استخدم درجات داكنة من الرمادي (مثل #121212). هذا يساعد في تقليل التباين الشديد ويسمح بالظلال والارتفاعات.</p>
        
        <h3>2. تقليل كثافة الألوان المشبعة</h3>
        <p>الألوان المشبعة يمكن أن تبدو ساطعة جدًا على خلفيات داكنة. قلل من تشبع الألوان للوضع الداكن مع الحفاظ على اللون الأساسي.</p>
        
        <h3>3. زيادة التباين عند الضرورة</h3>
        <p>تأكد من أن النص والعناصر التفاعلية تحتفظ بتباين كافٍ مع الخلفية للحفاظ على إمكانية القراءة.</p>
        
        <h2>تنفيذ الوضع الداكن باستخدام CSS</h2>
        <p>هناك عدة طرق لتنفيذ الوضع الداكن في تطبيقات الويب:</p>
        
        <h3>استخدام متغيرات CSS</h3>
        <pre><code>
        :root {
          --background: #ffffff;
          --text: #121212;
        }
        
        @media (prefers-color-scheme: dark) {
          :root {
            --background: #121212;
            --text: #e0e0e0;
          }
        }
        </code></pre>
        
        <h3>استخدام كلاس للتبديل</h3>
        <pre><code>
        :root {
          --background: #ffffff;
          --text: #121212;
        }
        
        .dark-mode {
          --background: #121212;
          --text: #e0e0e0;
        }
        </code></pre>
        
        <h2>اختبار الوضع الداكن</h2>
        <p>من المهم اختبار تصميمك في كلا الوضعين للتأكد من أن جميع العناصر مرئية ومتاحة بشكل جيد. انتبه بشكل خاص إلى:</p>
        <ul>
          <li>تباين النص والخلفية</li>
          <li>تمييز العناصر التفاعلية</li>
          <li>الارتفاعات والظلال</li>
          <li>الرسوم البيانية والتصوير</li>
        </ul>
        
        <h2>الخلاصة</h2>
        <p>التصميم للوضع الداكن ليس مجرد عكس الألوان. إنه يتطلب اعتبارات دقيقة للون والتباين والتسلسل الهرمي المرئي. من خلال اتباع أفضل الممارسات الموضحة هنا، يمكنك إنشاء واجهة جميلة وقابلة للاستخدام تعمل بشكل جيد في كلا الوضعين.</p>
      `,
      date: "28 فبراير 2025",
      category: "تصميم",
      readTime: "5 دقائق قراءة",
      author: "أدهم سيد",
      image: "https://placehold.co/800x400"
    },
    {
      id: 6,
      title: "إدارة الحالة ببساطة",
      content: `
        <p>نهج حديث لإدارة الحالة في تطبيقات رياكت دون تعقيد.</p>
        
        <h2>تغير مشهد إدارة الحالة</h2>
        <p>لقد تطورت إدارة الحالة في تطبيقات React بشكل كبير على مر السنين. من Redux الشامل إلى الحلول الأكثر بساطة مثل Context API والخطافات، هناك الآن مجموعة متنوعة من الخيارات المتاحة للمطورين.</p>
        
        <h2>المشاكل الشائعة في إدارة الحالة</h2>
        <p>قبل أن نتعمق في الحلول، دعونا نفهم بعض المشاكل الشائعة التي يواجهها المطورون مع إدارة الحالة:</p>
        <ul>
          <li>الحدود الغامضة (boilerplate) المفرطة</li>
          <li>منحنى التعلم الحاد</li>
          <li>العلاقة المتبادلة بين مكونات الحالة</li>
          <li>تحديثات الأداء والعرض</li>
          <li>تتبع الأخطاء وتصحيحها</li>
        </ul>
        
        <h2>نهج طبقات إدارة الحالة</h2>
        <p>بدلاً من حل واحد يناسب الجميع، يمكن أن يكون النهج المتدرج فعالاً:</p>
        
        <h3>المستوى 1: حالة المكون</h3>
        <p>استخدم useState و useReducer للحالة المحلية داخل المكونات:</p>
        <pre><code>
        function Counter() {
          const [count, setCount] = useState(0);
          
          return (
            &lt;div>
              &lt;p>Count: {count}&lt;/p>
              &lt;button onClick={() => setCount(c => c + 1)}>
                Increment
              &lt;/button>
            &lt;/div>
          );
        }
        </code></pre>
        
        <h3>المستوى 2: مشاركة الحالة بين المكونات</h3>
        <p>استخدم Context API لمشاركة الحالة بين المكونات المتعلقة:</p>
        <pre><code>
        const CountContext = createContext();
        
        function CountProvider({ children }) {
          const [count, setCount] = useState(0);
          
          return (
            &lt;CountContext.Provider value={{ count, setCount }}>
              {children}
            &lt;/CountContext.Provider>
          );
        }
        </code></pre>
        
        <h3>المستوى 3: فصل منطق الحالة</h3>
        <p>استخدم الخطافات المخصصة لتغليف منطق الحالة:</p>
        <pre><code>
        function useCounter(initialValue = 0) {
          const [count, setCount] = useState(initialValue);
          
          const increment = () => setCount(c => c + 1);
          const decrement = () => setCount(c => c - 1);
          const reset = () => setCount(initialValue);
          
          return {
            count,
            increment,
            decrement,
            reset
          };
        }
        </code></pre>
        
        <h2>مكتبات إدارة الحالة الحديثة</h2>
        <p>إذا كنت بحاجة إلى مزيد من القوة، فإن المكتبات الحديثة توفر الكثير من الفوائد مع قدر أقل من التعقيد:</p>
        <ul>
          <li><strong>Zustand:</strong> مكتبة بسيطة يمكن استخدامها خارج مكونات React.</li>
          <li><strong>Jotai:</strong> نهج ذري لإدارة الحالة، مثالي للحالات المعقدة.</li>
          <li><strong>Recoil:</strong> من Facebook، يوفر أداءً جيدًا للحالات المعقدة.</li>
        </ul>
        
        <h2>متى تستخدم كل منها؟</h2>
        <ul>
          <li>استخدم <strong>حالة المكون</strong> للتفاعلات المحلية والحالة المؤقتة.</li>
          <li>استخدم <strong>سياق React</strong> لمشاركة القيم العميقة في شجرة المكونات.</li>
          <li>استخدم <strong>الخطافات المخصصة</strong> لإعادة استخدام منطق الحالة.</li>
          <li>استخدم <strong>مكتبات إدارة الحالة</strong> للتطبيقات المعقدة أو عندما تحتاج إلى ميزات متقدمة.</li>
        </ul>
        
        <h2>الخلاصة</h2>
        <p>لم تعد إدارة الحالة بالضرورة معقدة كما كانت من قبل. باستخدام النهج المتدرج واختيار الأدوات المناسبة لمشكلتك المحددة، يمكنك تبسيط إدارة الحالة بشكل كبير في تطبيقات React. تذكر أن أبسط حل هو غالبًا الأفضل - لا تستخدم مطرقة لكسر الجوز!</p>
      `,
      date: "15 فبراير 2025",
      category: "تطوير",
      readTime: "9 دقائق قراءة",
      author: "أدهم سيد",
      image: "https://placehold.co/800x400"
    },
  ];
  
  const post = blogPosts.find(post => post.id === parseInt(id || "0"));
  
  if (!post) {
    return (
      <div className="pt-28 min-h-screen" dir="rtl">
        <div className="page-container">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">المقال غير موجود</h1>
            <p className="text-muted-foreground mb-8">المقال الذي تبحث عنه غير متوفر.</p>
            <Button asChild>
              <Link to="/blog">العودة إلى المدونة</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28" dir="rtl">
      <div className="page-container">
        <div className="mb-8">
          <Link to="/blog" className="text-primary link-hover flex items-center gap-2">
            &larr; العودة إلى المدونة
          </Link>
        </div>
        
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-medium text-sm">{post.author?.charAt(0)}</span>
              </div>
              <span>{post.author}</span>
            </div>
          </header>
          
          {post.image && (
            <div className="mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          )}
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">مقالات ذات صلة</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter(relatedPost => relatedPost.id !== post.id && relatedPost.category === post.category)
                .slice(0, 2)
                .map(relatedPost => (
                  <Card key={relatedPost.id}>
                    <CardContent className="p-4">
                      <div className="text-sm text-muted-foreground mb-2">{relatedPost.date}</div>
                      <h3 className="text-lg font-medium mb-2">
                        <Link to={`/blog/${relatedPost.id}`} className="hover:text-primary transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
