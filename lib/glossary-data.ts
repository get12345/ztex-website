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
];
