import { FC } from "react";
import { Skeleton } from "antd";

export interface MindNumberContentProps {
  mindNumber: string;
  content?: {
    "Approach method": string;
    Examples: {
      "Approach and way of motivation.": string;
      Children: string;
      "Internal needs": string;
      Introductory: string;
      Recommendations: string;
      Task: string;
      "Why do they come to a crisis?": string;
      "With psychological blocks": string;
    };
    minuses: {
      Attention: string;
      Basis: string;
      Description: string;
      "For men": string;
      "For women": string;
      Introduction: string;
    };
    pros: {
      Attention: string;
      Basis: string;
      Description: string;
      "For men": string;
      "For women": string;
      Introduction: string;
    };
  };
}

const ArticlePart: FC<{
  title?: string;
  text: string;
}> = ({ title = "", text = "" }) => {
  if (text) {
    return (
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    );
  }
  return <></>;
};

const MindNumberContent: FC<MindNumberContentProps> = ({
  mindNumber = "",
  content,
}) => {
  if (!content) {
    return (
      <div>
        <Skeleton active />
        <Skeleton active />
      </div>
    );
  }
  const examples = content.Examples;
  const plus = content.pros;
  const minuses = content.minuses;

  return (
    <div>
      {content && (
        <div>
          <div>
            <h1>Ваша задача</h1>
            <ArticlePart text={content["Approach method"]} />
          </div>

          <div>
            <h1>Примеры</h1>
            <ArticlePart
              title="Внутренняя потребность"
              text={examples["Internal needs"]}
            />
            <ArticlePart title="Задача" text={examples.Task} />
            <ArticlePart
              title="Психологические блоки"
              text={examples["With psychological blocks"]}
            />
            <ArticlePart title="Дети" text={examples.Children} />
            <ArticlePart title="Рекомендации" text={examples.Recommendations} />
            <ArticlePart
              title="Почему приходит кризис"
              text={examples["Why do they come to a crisis?"]}
            />
            <ArticlePart title="Вводная" text={examples.Introductory} />
            <ArticlePart
              title="Как мотивировать"
              text={examples["Approach and way of motivation."]}
            />
          </div>
          <div>
            <h1>В плюсе</h1>
            <ArticlePart title="Описание" text={plus.Description} />
            <ArticlePart title="Эмоции" text={plus.Introduction} />
            <ArticlePart title="По умолчанию" text={plus.Basis} />
            <ArticlePart title="Для мужчин" text={plus["For men"]} />
            <ArticlePart title="Для женщин" text={plus["For women"]} />
          </div>
          <div>
            <h1>В минусе</h1>
            <ArticlePart title="Описание" text={minuses.Description} />
            <ArticlePart title="Эмоции" text={minuses.Introduction} />
            <ArticlePart title="По умолчанию" text={minuses.Basis} />
            <ArticlePart title="Для мужчин" text={minuses["For men"]} />
            <ArticlePart title="Для женщин" text={minuses["For women"]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MindNumberContent;
