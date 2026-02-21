export type GlossaryTerm = {
    slug: string;
    term: string;
    definition: string;
    longDescription: string;
    relatedTerms: string[];
    sameAs?: string;
};

export const glossaryTerms: GlossaryTerm[] = [
    {
        slug: "ax",
        term: "AX (AI Transformation)",
        definition:
            "DX（デジタルトランスフォーメーション）の次の段階として、AI技術を核に業務プロセスやビジネスモデルそのものを変革すること。",
        longDescription: `
      AX（AI Transformation）とは、単なる「AIツールの導入」ではありません。
      従来のDXが「アナログ情報のデジタル化」や「ITツールによる効率化」を主眼としていたのに対し、AXは「AIによる自律的な判断・生成能力」を前提に、経営判断や業務フローを再構築することを指します。
      
      例えば、カスタマーサポートにおいて「チャットボットを入れる」のがDXだとすれば、「過去の対応履歴から最適な回答をAIが生成し、人間が最終確認をするだけで完結するフローに変える」のがAXです。
      株式会社ZTEXでは、このAXこそが日本の中小企業の労働生産性を劇的に向上させる鍵であると考えています。
    `,
        relatedTerms: ["DX", "RAG", "Agent AI"],
        sameAs: "https://ja.wikipedia.org/wiki/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B9%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3", // DX for context
    },
    {
        slug: "rag",
        term: "RAG (Retrieval-Augmented Generation)",
        definition:
            "「検索拡張生成」のこと。LLM（大規模言語モデル）が学習していない社内データや最新情報を外部から検索し、回答生成に利用する技術。",
        longDescription: `
      ChatGPTなどのAIは、学習に含まれていない最新のニュースや、企業独自の社内規定（クローズドなデータ）を知りません。
      これを解決するのがRAG（Retrieval-Augmented Generation）です。
      
      仕組みとしては、ユーザーの質問に関連する情報を社内データベースから「検索（Retrieval）」し、その情報をAIに「プロンプトの一部として渡す」ことで、正確な回答を「生成（Generation）」させます。
      これにより、AIの「もっともらしい嘘（ハルシネーション）」を抑制し、実務で使える高精度な回答システムを構築できます。
    `,
        relatedTerms: ["LLM", "Vector Database", "Hallucination"],
        sameAs: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation",
    },
    {
        slug: "agent-ai",
        term: "Agent AI (エージェントAI)",
        definition:
            "自律型AIのこと。人間からの指示を待つだけでなく、与えられた目標（ゴール）を達成するために、AI自身が必要なタスクを分解・実行・修正するシステム。",
        longDescription: `
      従来のAI（チャットボットなど）は、人間が「これをして」と命令すれば動く受動的な存在でした。
      対してエージェントAIは、例えば「来月の売上予測レポートを作って」という抽象的な指示に対し、自ら「1. 売上データの取得」「2. データの分析」「3. グラフ作成」「4. レポート執筆」といった手順を考え、実行します。
      
      エラーが出れば自分で修正を試みるなど、あたかも優秀な部下のように振る舞うため、業務自動化の最終形として注目されています。
    `,
        relatedTerms: ["Generative AI", "Chain of Thought", "n8n"],
        sameAs: "https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88_(%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6)",
    },
    {
        slug: "prompt-engineering",
        term: "Prompt Engineering (プロンプトエンジニアリング)",
        definition:
            "AIから望ましい出力を得るために、指示（プロンプト）を最適化する技術・設計手法のこと。",
        longDescription: `
      高機能なAIモデルを使っても、指示の出し方が曖昧であれば期待する結果は得られません。
      プロンプトエンジニアリングは、AIに対して「役割を与える（あなたはプロの編集者です）」「制約条件をつける（300文字以内で）」「例を示す（Few-Shot）」などのテクニックを駆使し、AIの潜在能力を最大限に引き出すスキルです。
      現在は、このプロンプト作成自体をAIに行わせる「自動プロンプト最適化」の研究も進んでいます。
    `,
        relatedTerms: ["LLM", "Few-Shot Prompting", "Chain of Thought"],
        sameAs: "https://ja.wikipedia.org/wiki/%E3%83%97%E3%83%AD%E3%83%B3%E3%83%97%E3%83%88%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%83%AA%E3%83%B3%E3%82%B0",
    },
    {
        slug: "fine-tuning",
        term: "Fine-tuning (ファインチューニング)",
        definition:
            "既存のAIモデルに対し、追加のデータを与えて再学習させ、特定のタスクや知識に特化させる手法。",
        longDescription: `
      汎用的なLLM（GPT-4など）は「広く浅く」何でも知っていますが、特定の業界用語や、企業特有の「口調・トーン」までは再現できません。
      ファインチューニングを行うことで、例えば「法律事務所のような厳格な文章を書くAI」や「特定のプログラミング言語に特化したAI」など、自社の目的に完全にフィットしたカスタムモデルを作成できます。
      RAGと異なり「知識の定着」だけでなく「振る舞いの矯正」に効果的です。
    `,
        relatedTerms: ["Transfer Learning", "LoRA", "RAG"],
        sameAs: "https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%B3%E3%83%81%E3%83%A5%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0_(%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92)",
    },
    {
        slug: "autonomous-ai-agent",
        term: "自律型AIエージェント (Autonomous AI Agent)",
        definition:
            "人間の逐次指示なしに、与えられた目標を達成するために自ら計画・実行・修正を繰り返す高度なAIシステム。従来のチャットボットとは異なり、複数ステップの業務を自律的に遂行する。",
        longDescription: `
      自律型AIエージェントは、2025年以降のAI活用における最大のトレンドです。
      従来のAI（ChatGPTなどの対話型AI）は、人間が「これをして」と命令するたびに1回だけ応答する受動的な存在でした。
      
      対して自律型AIエージェントは、例えば「来月のマーケティングレポートを作成して」という1つの指示に対し、自ら「1. データ収集」「2. 分析」「3. グラフ作成」「4. レポート執筆」「5. 関係者への送信」といった複数のステップを計画し、順番に実行します。途中でエラーが発生すれば自分でリカバリーを試み、必要に応じて人間に承認を求めるフローも組み込めます。
      
      株式会社ZTEXでは、このエージェント技術を業務自動化の最終形と位置づけ、仙台・宮城を拠点に企業への導入支援を行っています。
    `,
        relatedTerms: ["Agent AI", "マルチエージェントシステム", "n8n"],
        sameAs: "https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88_(%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6)",
    },
    {
        slug: "multi-agent-system",
        term: "マルチエージェントシステム (Multi-Agent System)",
        definition:
            "複数の専門AIエージェントが役割分担しながら協調して、単一のエージェントでは困難な複雑なタスクを遂行するアーキテクチャ。",
        longDescription: `
      マルチエージェントシステムとは、1つの万能AIに全てを任せるのではなく、「リサーチ担当AI」「分析担当AI」「レポート作成担当AI」のように、それぞれ専門性を持った複数のAIエージェントがチームとして連携する仕組みです。
      
      例えば、営業チームの業務を自動化する場合：
      - エージェントA：CRMから顧客情報を収集
      - エージェントB：過去の商談データを分析して提案内容を生成
      - エージェントC：提案書のドラフトを作成
      - エージェントD：完成した提案書を関係者に送信
      
      各エージェントが自分の得意分野に特化することで、単一AIよりも高精度・高効率な処理が可能になります。2026年現在、AIエージェントの進化は「ソロ→チーム」へとシフトしており、企業のAI活用の次なるフロンティアとして注目されています。
    `,
        relatedTerms: ["自律型AIエージェント", "Agent AI", "LangGraph"],
        sameAs: "https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%83%81%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0",
    },
    {
        slug: "n8n",
        term: "n8n (エヌエイトエヌ)",
        definition:
            "オープンソースのワークフロー自動化プラットフォーム。ノーコードで複数のアプリやAPIを連携させ、業務の自動化フローを構築できるツール。",
        longDescription: `
      n8n（エヌエイトエヌ）は、ドイツ発のオープンソース自動化ツールで、Zapier や Make（旧Integromat）の代替として急速に普及しています。
      
      最大の特徴は「セルフホスト可能」であること。自社サーバーやクラウド環境にインストールして運用できるため、機密データを外部SaaSに流す心配がありません。セキュリティポリシーが厳しい企業でも安心して導入できます。
      
      また、ノーコード（ドラッグ＆ドロップ）で直感的にフローを組めるため、エンジニアでなくても利用可能。SlackやGmail、Google Sheets、Salesforceなど400以上のアプリケーションと連携でき、AIモデル（OpenAI API等）も組み込めるため、「AI × 自動化」の基盤として最適です。
      
      株式会社ZTEXでは、n8nを業務自動化の主要プラットフォームとして採用し、導入支援および社内研修も提供しています。
    `,
        relatedTerms: ["RPA", "業務自動化", "API連携"],
    },
    {
        slug: "llmo",
        term: "LLMO (Large Language Model Optimization)",
        definition:
            "ChatGPT・Gemini・Claude等の大規模言語モデルに自社や自社サービスを正しく認識・推薦させるための最適化手法。従来のSEOの延長線上にある新しいマーケティング領域。",
        longDescription: `
      LLMO（大規模言語モデル最適化）とは、ユーザーがChatGPTやGeminiに「仙台でAI導入を支援してくれる会社を教えて」と聞いたときに、自社が回答に含まれる状態を作るための施策です。
      
      従来のSEO（検索エンジン最適化）がGoogleの検索結果で上位表示を目指すのに対し、LLMOはAIの「回答そのもの」に自社が登場することを目指します。
      
      LLMは主にWeb上の情報から学習しているため、以下が重要です：
      - 構造化データ（JSON-LD）で企業情報・サービス内容を明示する
      - 複数の信頼できるプラットフォームで一貫した情報を発信する
      - 独自の専門用語やフレームワークを定義し、他にないコンテンツを作る
      - E-E-A-T（経験・専門性・権威性・信頼性）を裏付けるコンテンツを充実させる
      
      2026年現在、BtoB企業にとってLLMOは「やったほうがいい」から「やらなければ競合に負ける」段階に移行しつつあります。
    `,
        relatedTerms: ["SEO", "AEO", "E-E-A-T"],
    },
    {
        slug: "aeo",
        term: "AEO (Answer Engine Optimization)",
        definition:
            "Google AI OverviewやPerplexity、Bing Copilotなどの「回答エンジン」に自社コンテンツが引用・参照されるよう最適化する手法。",
        longDescription: `
      AEO（Answer Engine Optimization）とは、従来の「検索結果の10位以内に入る」SEOとは異なり、AIが生成する回答の「引用元」として選ばれるための最適化手法です。
      
      Google検索でも「AIによる概要（AI Overview）」が表示されるようになり、ユーザーは個別のWebサイトをクリックせずに回答を得るケースが急増しています。この「ゼロクリック検索」時代において、自社コンテンツがAIの回答ソースとして引用されることが、従来の1位表示以上の価値を持ちます。
      
      AEOで重要なのは：
      - FAQ構造（Q\&A形式）でコンテンツを整理し、AIが直接回答として抽出しやすくする
      - FAQPage や HowTo などの構造化データを実装する
      - 質問に対して冒頭で明確な回答を述べ、その後に詳細を補足する構成にする
      - 業界の権威ある情報源として認識されるよう、専門性の高い独自コンテンツを発信する
    `,
        relatedTerms: ["SEO", "LLMO", "構造化データ"],
    },
];

